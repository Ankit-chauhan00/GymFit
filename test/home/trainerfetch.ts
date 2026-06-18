/* eslint-disable import/no-anonymous-default-export */
import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "30s", target: 1000 },
   
  ],
};

export default function () {


  const res = http.get(
    `https://gym-project-prra.vercel.app/products`
  );

  check(res, {
    "status is 200": (r) => r.status === 200,
  });

  sleep(1);
}