import React, { useState } from "react";
import CustomTitle from "../custom/CustomTitle";
import { Toaster, toast } from 'sonner'
import { X } from 'lucide-react';
import { Mail } from "lucide-react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
import ButtonSend from "../custom/buttons/ButtonSend";
import FormContact from "./FormContact";
import { Card } from "flowbite-react";

const ContactMe = () => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);


  const toastSuccess = () => {
    toast.success(t("CONTACT.SUCCESS"), {
      cancel: {
        label: <X />
      },
    })
  }

  const toastCancel = () => {
    toast.cancel(t("CONTACT.ERROR"), {
      cancel: {
        label: <X />
      },
    })
  }

  const ValidSchema = Yup.object().shape({
    firstname: Yup.string().required(t("ERROR.FIRSTNAME")),
    lastname: Yup.string().required(t("ERROR.LASTNAME")),
    mail: Yup.string()
      .email(t("ERROR.VALID"))
      .required(t("ERROR.EMAIL")),
    message: Yup.string()
      .min(10, t("ERROR.SHORT"))
      .max(800, t("ERROR.LONG"))
      .required(t("ERROR.MESSAGE")),
  });

  // Email parameters email.js to contact
  const yourServiceId = "service_ywrarm8";
  const yourTemplateId = "template_ngcvdt8";
  const yourPublicId = "hIBcrSEQcNVxZU0im";

  const sendMail = (values, { resetForm }) => {
    setLoading(true);
    emailjs
      .send(yourServiceId, yourTemplateId, values, yourPublicId)
      .then(() => {
        toastSuccess();
        setLoading(false);
        resetForm();
      },
    (error) => {
        console.log('FAILED...', error.text);
        toastCancel();
        setLoading(false);
        // resetForm();
    }
    )
      // .catch(() => {
      //   toastCancel();
      //   setLoading(false);
      //   resetForm();
      // });
  };



  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      mail: "",
      message: "",
    },
    enableReinitialize: true,
    validationSchema: ValidSchema,
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      sendMail(values, { resetForm });
    },
  });

  return (
    <div id="contact" className="flex flex-col justify-center gap-5 mt-5">
      <CustomTitle className={"title"}>Contact</CustomTitle>



      <Card className="mt-3">
      <form onSubmit={formik.handleSubmit}>
        <FormContact formik={formik} />

        <div className="flex justify-between items-center">
          <ButtonSend loading={loading} />
          <div className="flex items-center gap-2">
            <Mail className="dark:text-gray-200" />
            <p className="dark:text-gray-200 max-sm:text-xs">thomas.bartier59@gmail.com</p>
          </div>
        </div>
        <Toaster position="bottom-left" richColors duration={3000} className="max-sm:mb-20" />
      </form>
    </Card>
    </div>
  );
};

export default ContactMe;
