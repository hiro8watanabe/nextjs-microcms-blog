import React, { useState } from "react";
import type { NextPage } from "next";
import formStyles from "src/components/Form/Form.module.css";
import Router from "next/router";
import { Loading } from "src/components/Form/Loading";
import { Success } from "src/components/Form/Success";

type Props = {};

export const Form: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  // const [resData, setResData] = useState(null);
  const [form, setForm] = useState({
    name: "",
    mail: "",
    msg: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsLoading(true);

    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify({
        name: form.name,
        mail: form.mail,
        msg: form.msg,
      }),
    })
      .then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          // Router.push("/about");
          setIsSuccess(true);
          console.log("Response succeeded!");
          setIsLoading(false);
        } else {
          console.log(`Error: Status Code ${res.status}`);
        }
      })
      .catch((e) => {
        console.log(`Error: ${e}`);
        setIsLoading(false);
      });
  };

  return (
    <>
      {!isLoading && !isSuccess ? (
        <form className={formStyles.form}>
          {" "}
          <div className={formStyles.inputWrap}>
            <label
              htmlFor="name"
              className={`${formStyles.label} ${formStyles.fontBold}`}
            >
              お名前
            </label>
            <input
              onChange={(e) => {
                const val = e.currentTarget.value;
                setForm((props) => ({
                  ...props,
                  name: val !== null ? val : "",
                }));
              }}
              value={form.name}
              id="name"
              name="name"
              type="text"
              className={formStyles.feedbackInput}
              placeholder="PENGINさん"
              required
            />
          </div>
          <div className={formStyles.inputWrap}>
            <label
              htmlFor="mail"
              className={`${formStyles.label} ${formStyles.fontBold}`}
            >
              メールアドレス
            </label>
            <input
              onChange={(e) => {
                const val = e.currentTarget.value;
                setForm((props) => ({
                  ...props,
                  mail: val !== null ? val : "",
                }));
              }}
              id="mail"
              name="mail"
              type="mail"
              className={formStyles.feedbackInput}
              placeholder="sample@example.com"
              required
            />
          </div>
          <div className={formStyles.inputWrap}>
            <label
              htmlFor="text"
              className={`${formStyles.label} ${formStyles.fontBold}`}
            >
              お問い合わせ内容
            </label>
            <textarea
              onChange={(e) => {
                const val = e.currentTarget.value;
                setForm((props) => ({
                  ...props,
                  msg: val !== null ? val : "",
                }));
              }}
              id="text"
              name="text"
              className={`${formStyles.feedbackInput} ${formStyles.feedbackTextArea}`}
              placeholder="お問い合わせ内容を入力してください"
              required
            ></textarea>
          </div>
          <button
            onClick={(e: any) => {
              handleSubmit(e);
            }}
            className={formStyles.submitBtn}
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      ) : isSuccess ? (
        <Success />
      ) : (
        <Loading />
      )}
    </>
  );
};
