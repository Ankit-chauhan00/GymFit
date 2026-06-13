"use client";

import React, { useEffect, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { CreateExerciseFormValues } from "@/types/global";
import { toast } from "sonner";

const ExerciseMedia = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const [imageUpload, setImageUpload] = useState(false);
  const [videoUpload, setVideoUpload] = useState(false);

  const form = useFormContext<CreateExerciseFormValues>();

  const imageUrl = form.watch("imageUrl");
  const videoUrl = form.watch("videoUrl");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!imageUrl) setImagePreview(null);
    if (!videoUrl) setVideoPreview(null);
  },[imageUrl, videoUrl]);

  const handleImageUplaod = async (file: File) => {
    try {
      setImageUpload(true);

      const authResponse = await fetch(`/api/upload-auth`);

      const auth = await authResponse.json();
      const formData = new FormData();

      formData.append("file", file);
      formData.append("fileName", file.name);
      formData.append("publicKey", auth.publicKey);
      formData.append("signature", auth.signature);
      formData.append("expire", auth.expire);
      formData.append("token", auth.token);

      const uploadRes = await fetch("https://upload.imagekit.io/api/v1/files/upload", {
        method: "POST",
        body: formData,
      });

      const data = await uploadRes.json();

      form.setValue("imageUrl", data.url);

      toast.success("Image uploaded");

      return data.url;
    } catch (error) {
      console.log(error);
    } finally {
      setImageUpload(false);
    }
  };

  const handleVedioUpload = async (file: File) => {
    try {
      setVideoUpload(true);

      const formData = new FormData();

      formData.append("file", file);

      const response = await fetch(`/api/create-exercise/upload-video`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      form.setValue("videoUrl", data.url);

      toast.success("Vedio uploaded");

      return data.url;
    } catch (error) {
      console.log(error);
    } finally {
      setVideoUpload(false);
    }
  };

  return (
    <Card className="bg-color min-w-full rounded-md">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row items-center gap-2 md:gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 p-2 text-sm font-bold md:text-xl">
              2
            </span>

            <h2 className="font-asap text-xl md:text-2xl">Exercise Media</h2>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {/* IMAGE UPLOAD */}
          <div className="flex flex-col gap-2">
            <label className="font-asap flex gap-2 text-sm">
              Thumbnail Image
              <span className="text-red-600">*</span>
            </label>

            <label
              htmlFor="thumbnail"
              className="relative flex h-52 cursor-pointer items-center justify-center overflow-hidden rounded-md border-2 border-dashed transition-colors hover:border-red-500"
            >
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  height={30}
                  width={20}
                  alt="Exercise Thumbnail Preview"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <FiUploadCloud className="mb-3 size-10 opacity-70" />

                  <p className="font-asap text-sm font-medium">Click to upload image</p>

                  <p className="font-asap mt-1 text-xs opacity-60">PNG, JPG, WEBP up to 5MB</p>
                </div>
              )}
            </label>

            <Input
              id="thumbnail"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={async (e) => {
                const file = e.target.files?.[0];

                if (!file) return;

                setImagePreview(URL.createObjectURL(file));
                await handleImageUplaod(file);
              }}
            />
          </div>

          {/* VIDEO UPLOAD */}
          <div className="flex flex-col gap-2">
            <label className="font-asap flex gap-2 text-sm">
              Exercise Video
              <span className="text-red-600">*</span>
            </label>

            <label
              htmlFor="video"
              className="relative flex h-52 cursor-pointer items-center justify-center overflow-hidden rounded-md border-2 border-dashed transition-colors hover:border-red-500"
            >
              {videoPreview ? (
                <video controls className="w-full object-cover">
                  <source src={videoPreview} />
                </video>
              ) : (
                <div className="flex flex-col items-center">
                  <FiUploadCloud className="mb-3 size-10 opacity-70" />

                  <p className="font-asap text-sm font-medium">Click to upload video</p>

                  <p className="font-asap mt-1 text-xs opacity-60">MP4, WEBM, MOV up to 20MB</p>
                </div>
              )}
            </label>

            <Input
              id="video"
              type="file"
              accept="video/mp4,video/webm,video/quicktime"
              className="hidden"
              onChange={async (e) => {
                const file = e.target.files?.[0];

                if (!file) return;

                setVideoPreview(URL.createObjectURL(file));

                await handleVedioUpload(file);
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExerciseMedia;
