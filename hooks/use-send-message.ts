"use client";

import { useState } from "react";

import type { ApiResponse, FormState } from "@/types";
import { WEB_FORM_ACCESS_KEY } from "@/config";

const apiState: FormState = {
  loading: false,
  success: false,
  message: "",
};

export const useSendMessage = () => {
  const [state, setState] = useState<FormState>(apiState);

  const sendMessage = async (formData: FormData) => {
    const payload = {
      access_key: WEB_FORM_ACCESS_KEY,
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    setState((prevState) => ({
      ...prevState,
      loading: true,
      message: "",
    }));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result: ApiResponse = await response.json();
      if (!response.ok) {
        throw new Error(result.message || response.statusText);
      }

      setState({
        loading: false,
        success: true,
        message: result.message,
      });
    } catch (error) {
      const err = error as Error;
      setState({
        loading: false,
        success: false,
        message: err.message,
      });
    }
  };

  return { state, sendMessage };
};
