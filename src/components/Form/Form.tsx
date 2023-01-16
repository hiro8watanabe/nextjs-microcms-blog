import React, { useState } from "react";
import type { NextPage } from "next";
import formStyles from "src/components/Form/Form.module.css";
import { Loading } from "src/components/Form/Loading";
import { Success } from "src/components/Form/Success";

export const Form: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(true);
  const [form, setForm] = useState({
    name: "",
    mail: "",
    msg: "",
  });
  const [nameFlag, setNameFlag] = useState<boolean>(true);
  const [mailFlag, setMailFlag] = useState<boolean>(true);
  const [messageFlag, setMessageFlag] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    // e.preventDefault();

    const name = form.name;
    const mail = form.mail;
    const msg = form.msg;

    if (name === "" || mail === "" || msg === "") {
      return;
    } else {
      setIsLoading(true);

      fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          mail: mail,
          msg: msg,
        }),
      })
        .then((res) => {
          console.log("Response received");
          if (res.status === 200) {
            setIsSuccess(true);
            console.log("Response succeeded!");
            setIsLoading(false);
          } else {
            setIsLoading(false);
            setNameFlag(true);
            setMailFlag(true);
            setMessageFlag(true);
            setErrorMessage(false);
            console.log(`Error: Status Code ${res.status}`);
          }
        })
        .catch((e) => {
          console.log(`Error: ${e}`);
          setNameFlag(true);
          setMailFlag(true);
          setMessageFlag(true);
          setIsLoading(false);
        });
    }
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
                const val = e.target.value;
                setForm((props) => ({
                  ...props,
                  name: val !== null ? val : "",
                }));
                setNameFlag(val !== "" ? false : true);
              }}
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
                const val = e.target.value;
                setForm((props) => ({
                  ...props,
                  mail: val !== null ? val : "",
                }));
                setMailFlag(val !== "" ? false : true);
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
                const val = e.target.value;
                setForm((props) => ({
                  ...props,
                  msg: val !== null ? val : "",
                }));
                setMessageFlag(val !== "" ? false : true);
              }}
              id="text"
              name="text"
              className={`${formStyles.feedbackInput} ${formStyles.feedbackTextArea}`}
              placeholder="お問い合わせ内容を入力してください"
              required
            ></textarea>
          </div>
          {errorMessage ? undefined : <p className={formStyles.error}>入力内容に誤りがあります。</p>}
          <button
            onClick={(e: any) => {
              handleSubmit(e);
            }}
            className={
              nameFlag || mailFlag || messageFlag
                ? `${formStyles.submitBtnDisabled}`
                : `${formStyles.submitBtnDisabled} ${formStyles.submitBtnActive}`
            }
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
