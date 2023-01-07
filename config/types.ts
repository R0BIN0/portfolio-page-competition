/* eslint-disable no-unused-vars */
import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  href: string;
  firstTitle: string;
  site: string;
  github: string;
  description: string;
  image: string;
  technologies: StaticImageData[];
  secondTitle: string;
  role: string;
  process: string;
  video: string;
  backgroundColor: string;
};

export type ProjectHome = {
  href: string;
  year: string;
  type: string;
  title: string;
  technologies: StaticImageData[];
  image: string;
  backgroundColor: string;
  firstTitle: string;
  site: string;
  description: string;
};

export type TopProjectProps = {
  firstTitle: string;
  site: string;
  description: string;
  image: string;
  backgroundColor: string;
  route?: boolean;
};

export type FormData = {
  formState: FormState;
  lastName: string;
  firstName: string;
  mail: string;
  phone: string;
  request: string;
};

export type FormState = {
  inValidation: FormValidation;
};

export enum FormValidation {
  DEFAULT = "default",
  INPROCESS = "inProcess",
  SUCCESS = "success",
  FAILED = "failed",
}

export type FormModalProps = {
  setFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
