import {isLen} from "../../utilities/isLen.ts";
import {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

interface IFormInputs {
  messageValue: string
}

const FormAddEmail = () => {
  const date = new Date();
  const [messageValue, setMessageValue] = useState('');
  const [successMessage, setSuccessMessage] = useState<boolean | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInputs>();

  const onValidSubmit: SubmitHandler<IFormInputs> = () => {
    setSuccessMessage(null);
    setMessageValue('');
  }

  const onInvalidSubmit = () => {
    setSuccessMessage(false);
  }

  return (
      <form className={'text-xl mt-4 border-solid border-2 border-zinc-600 rounded-xl p-4'} onSubmit={handleSubmit(onValidSubmit, onInvalidSubmit)}>
        <div className={'flex justify-between'}>
          <legend className={'text-3xl italic'}>Форма отравки письма</legend>
          <div>
            <button type={"submit"}>Отправить письмо</button>
          </div>
        </div>
        <div>
          <label htmlFor="form-message">Введите сообщение, которое хотите отправить!</label>
          <textarea
            {...register('messageValue', {
              required: true,
              minLength: 10
            })}
            spellCheck={false}
            className={`min-h-[100px] py-2 ${successMessage === null  ? '' : (successMessage ? 'border-green-400' : 'border-red-700')}`}
            id='form-message'
            value={messageValue}
            placeholder='Ваше сообщение...'
            onChange={(e) => setMessageValue(e.target.value)}/>
          {errors.messageValue && <span className={'text-red-700 font-bold'}>Осторожно! Посмотрите, содержит ли ваше поле не менее 10 символов!</span>}
        </div>
        <div className={'flex justify-between mt-5 pt-2 border-solid border-t-2 border-gray-500'}>
          <h5 className={'text-gray-400'}>Author: by Martin</h5>
          <div>
            Date of sending the message: {`${isLen(date.getDate())}.${isLen(date.getUTCMonth() + 1)}.${date.getUTCFullYear()}`}
          </div>
        </div>
      </form>
  );
};

export default FormAddEmail;