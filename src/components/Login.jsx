// import { VscEye, VscEyeClosed } from "react-icons/vsc";
import InputWithLabel from "../components/CustomField";
import { FaRegUser } from "react-icons/fa6";
import { IoKeySharp } from "react-icons/io5";
import { IoLanguage } from "react-icons/io5";
import { IoColorPalette } from "react-icons/io5";
import PassField from "./PassField";

const Login = () => {
  return (
    <div className="w-[35rem] h-auto flex flex-col items-start justify-start gap-4 p-10 bg-[#EDEDED] font-iranyekan shadow rounded-2xl dark:bg-black dark:text-white">
      <h1 className="text-2xl font-semibold uppercase">ورود</h1>
      <h1 className="text-xl font-semibold">
        به
        <span className="text-blue-500"> سامانه ثبت تردد </span>
        خوش آمدید
      </h1>
      <div className="w-full h-auto flex flex-col justify-start items-center gap-5 pt-5">
        <InputWithLabel
          label={"نام کاربری"}
          placeholder={"نام کاربری"}
          icon={
            <FaRegUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          }
        />
        <PassField
          label={"کلمه عبور"}
          placeholder={"کلمه عبور"}
          icon={
            <IoKeySharp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          }
        />
        <InputWithLabel
          label={"زبان"}
          placeholder={"فارسی"}
          icon={
            <IoLanguage className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          }
        />
        <InputWithLabel
          label={"رنگ"}
          placeholder={"آبی"}
          icon={
            <IoColorPalette className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          }
        />

        <div className="w-full h-auto flex flex-row justify-start items-center gap-2 ">
          <input
            type="checkbox"
            id="rememberMe"
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <label htmlFor="rememberMe" className="text-blue-500">
            مرا به خاطر بسپار
          </label>
        </div>

        {/* <div className="w-full flex items-center rounded-lg border-2 border-gray-200">
            <Field
              className="w-full p-3 rounded-lg outline-none text-[0.90rem] max-sm:text-[0.80rem]"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder={"Password"}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="p-3 bg-white rounded-lg focus:outline-none"
            >
              {showPassword ? <VscEyeClosed size={20} /> : <VscEye size={20} />}
            </button>
          </div> */}

        <div className="w-full h-auto">
          <button className="w-full h-auto text-white rounded-sm flex flex-row justify-center items-center p-3 bg-[#1877D2]">
            ورود
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
