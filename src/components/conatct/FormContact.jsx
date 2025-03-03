import { useTranslation } from "react-i18next";
import ErrorMessage from "./ErrorMessage";

const FormContact = ({ formik }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="firstname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {t("CONTACT.FIRSTNAME")}
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            value={formik.values.firstname}
            onChange={formik.handleChange}
          />
          <ErrorMessage
            formik={formik}
            errors={formik.touched.firstname && formik.errors.firstname}
          />
        </div>
        <div>
          <label
            htmlFor="lastname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {t("CONTACT.LASTNAME")}
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
            value={formik.values.lastname}
            onChange={formik.handleChange}
          />
          <ErrorMessage
            formik={formik}
            errors={formik.touched.lastname && formik.errors.lastname}
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="mail"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {t("CONTACT.EMAIL")}
        </label>
        <input
          type="email"
          id="mail"
          name="mail"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="john.doe@company.com"
          required
          value={formik.values.mail}
          onChange={formik.handleChange}
        />
        <ErrorMessage
          formik={formik}
          errors={formik.touched.mail && formik.errors.mail}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {t("CONTACT.MESSAGE")}
        </label>
        <textarea
          className="resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="message"
          id="message"
          cols="80"
          rows="8"
          placeholder={t("CONTACT.PLACEHOLDER")}
          maxLength={800}
          value={formik.values.message}
          onChange={formik.handleChange}
        ></textarea>
        <ErrorMessage
          formik={formik}
          errors={formik.touched.message && formik.errors.message}
        />
      </div>
    </div>
  );
};

export default FormContact;
