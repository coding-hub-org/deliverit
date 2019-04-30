import { useState, useEffect } from "react";

export const useHttpPost = (url, body) => {
  fetch("http://127.0.0.1:3000/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body
  });
};

export const useHttpGet = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    console.log("Used hook http get");
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(myJson => {
        // setUser(myJson);
        setIsLoading(false);
        setData(myJson);
      });
  }, [dependencies]);

  return [isLoading, data];
};
