import { useDispatch } from "react-redux"; // Хук для отправки экшенов в Redux store
import { addUser } from "./userListSlice"; // Экшен для добавления нового пользователя в store
import { useState } from "react"; // Хук для управления локальным состоянием формы

function AddUserForm() {
  // Локальные состояния для имени и email пользователя
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Получаем функцию dispatch для отправки экшенов
  const dispatch = useDispatch();

  // Обработчик отправки формы
  function handleSubmit(e) {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    const newUser = { id: Date.now(), name, email }; // Создаём нового пользователя с уникальным id
    dispatch(addUser(newUser)); // Отправляем экшен в Redux для добавления пользователя
    setName(""); // Очищаем поля формы после отправки
    setEmail("");
  }

  return (
    <form className="add-user-form">
      {/* Поле ввода имени */}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Поле ввода email */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Кнопка отправки формы */}
      <button type="submit" onClick={handleSubmit}>
        Add User
      </button>
    </form>
  );
}

export default AddUserForm; // Экспорт компонента формы