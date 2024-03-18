import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "ckeditor5-build-oks";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Controller, useForm } from "react-hook-form";
import { InputMask } from "@react-input/mask";
import { useState } from "react";
// import "./style.scss";

const CkeditorField = () => {
  const [val, setVal] = useState("");
  console.log(val);
  return <InputMask mask="+0 (___) ___-__-__" replacement={{ _: /\d/ }} onChange={(evt) => setVal(evt.target.value)} />;
};

export default CkeditorField;
