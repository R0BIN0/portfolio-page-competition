import { AnimatePresence, motion } from "framer-motion";
import React, { useState, ChangeEvent, SyntheticEvent } from "react";
import {
  darkBackground,
  formCardAnimation,
  modalSuccess,
} from "../../animations/animations";
import { DarkBackground } from "../../styles/PagesStyles/index.styles";
import {
  FormModalStyle,
  InputFormStyle,
  ModalFormProcess,
} from "./FormModal.styles";

// Assets
import CloseIcon from "../../assets/images/close.png";
import CheckIcon from "../../assets/images/check.png";
import FailIcon from "../../assets/images/fail.png";
import Image from "next/image";
import { Flex } from "../../styles/Global/Global.styles";
import { FormData, FormValidation, FormModalProps } from "../../config/types";

// Data
const inputForm = [
  {
    type: "text",
    id: "lastName",
    label: "Nom :",
  },
  {
    type: "text",
    id: "firstName",
    label: "Prénom :",
  },
  {
    type: "email",
    id: "mail",
    label: "Email :",
  },
  {
    type: "text",
    id: "phone",
    label: "Numéro de Téléphone* :",
  },
  {
    textArea: true,
    type: "text",
    id: "request",
    label: "Message* :",
  },
];

const initialForm: FormData = {
  formState: {
    inValidation: FormValidation.DEFAULT,
  },
  lastName: "",
  firstName: "",
  mail: "",
  phone: "",
  request: "",
};

const FormModal = ({ setFormIsOpen }: FormModalProps) => {
  const [formState, setFormState] = useState(initialForm);

  const handleInputForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!e) return;
    const { target } = e;
    if (!target) return;
    const el = target as HTMLInputElement;
    if (!el) return;
    const id: string | null = el.getAttribute("id");
    if (!id) return;
    const newForm = { ...formState, [id]: target.value };
    setFormState(newForm);
  };

  //   const handleFormToggle = (close = false) => {
  //     const newFormState = { ...formState };

  //     if (close) {
  //       newFormState.formState.formIsOpen = false;
  //     } else {
  //       newFormState.formState.formIsOpen = !newFormState.formState.formIsOpen;
  //     }

  //     setFormState(newFormState);
  //   };

  const handleSubmitForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    const newFormState = { ...formState };
    // Send mail

    if (
      newFormState.firstName.length > 0 &&
      newFormState.lastName.length > 0 &&
      newFormState.mail.length > 0
    ) {
      newFormState.formState.inValidation = FormValidation.SUCCESS;
      setFormIsOpen(false);
    } else {
      newFormState.formState.inValidation = FormValidation.FAILED;
    }

    setTimeout(() => {
      const newFormState = { ...formState };
      newFormState.formState.inValidation = FormValidation.DEFAULT;
      setFormState(newFormState);
    }, 3000);

    setFormState(newFormState);
  };

  return (
    <>
      <FormModalStyle>
        <DarkBackground
          onClick={() => setFormIsOpen(false)}
          initial="hidden"
          animate="show"
          exit="exit"
          variants={darkBackground}
        ></DarkBackground>
        <div className="form-modal-backgroud">
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={formCardAnimation}
            className="form-modal-card"
          >
            <button
              className="form-modal-close"
              onClick={() => setFormIsOpen(false)}
            >
              <Image src={CloseIcon} width={15} height={15} />
            </button>

            <Flex justifyContent="center" alignItems="start" flexFlow>
              <h3 className="form-title">
                Ravi que vous vouliez prendre contact 👋
              </h3>
              <form className="form-grid-container">
                {inputForm.map((item) => (
                  <InputFormStyle key={item.id}>
                    <label htmlFor={item.id}>{item.label}</label>
                    {!item.textArea ? (
                      <input
                        type={item.type}
                        id={item.id}
                        onChange={(e) => handleInputForm(e)}
                        value={formState[item.id as keyof FormData] as string}
                      />
                    ) : (
                      <textarea
                        id={item.id}
                        onChange={(e) => handleInputForm(e)}
                        value={formState[item.id as keyof FormData] as string}
                      />
                    )}
                  </InputFormStyle>
                ))}
                <button
                  className="modal-form-send-btn"
                  onClick={(e) => handleSubmitForm(e)}
                  type="submit"
                >
                  Envoyer
                </button>
                <Flex
                  justifyContent="flex-end"
                  alignItems="center"
                  style={{ width: "100%" }}
                >
                  <p>* Champ(s) non obligatoire(s)</p>
                </Flex>
              </form>
            </Flex>
          </motion.div>
        </div>
      </FormModalStyle>

      <AnimatePresence exitBeforeEnter>
        {formState.formState.inValidation !== FormValidation.DEFAULT && (
          <ModalFormProcess
            initial="hidden"
            animate="show"
            exit="exit"
            variants={modalSuccess}
            backgroundcolor={
              formState.formState.inValidation === FormValidation.SUCCESS
                ? "#00ffa3"
                : "#e42503"
            }
          >
            <Flex alignItems="center" justifyContent="center">
              <p>
                {formState.formState.inValidation === FormValidation.SUCCESS
                  ? "Email envoyé"
                  : "L'envoi a échoué"}
              </p>
              <Image
                src={
                  formState.formState.inValidation === FormValidation.SUCCESS
                    ? CheckIcon
                    : FailIcon
                }
                width={17.5}
                height={17.5}
              />
            </Flex>
          </ModalFormProcess>
        )}
      </AnimatePresence>
    </>
  );
};

export default FormModal;
