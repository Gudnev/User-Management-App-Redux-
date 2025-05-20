import { useDispatch } from "react-redux"; // Хук для отправки действий (dispatch)
import { clearSelectedUser } from "./userDetailsSlice"; // Экшен для сброса выбранного пользователя
import { useSelector } from "react-redux"; // Хук для получения данных из Redux store

function SelectedUserDetails() {
  const dispatch = useDispatch(); // Получаем функцию dispatch

  // Получаем ID выбранного пользователя из userDetails
  const selectedUserId = useSelector((state) => state.userDetails.selectedUserId);

  // Получаем список всех пользователей из userList
  const users = useSelector((state) => state.userList.users);

  // Если пользователь не выбран, отображаем сообщение
  if (!selectedUserId) {
    return <p>No user selected</p>;
  }

  // Находим пользователя по его ID
  const user = users.find((user) => user.id === selectedUserId);

  // Если пользователь не найден (например, был удалён), показываем сообщение
  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div className="selected-user-details">
      <h2>Selected User</h2>
      <p>
        <strong>Name: </strong>
        {user.name} {/* Имя пользователя */}
      </p>
      <p>
        <strong>Email: </strong>
        {user.email} {/* Email пользователя */}
      </p>

      {/* Кнопка для сброса выбора пользователя */}
      <button className="clear-btn" onClick={() => dispatch(clearSelectedUser())}>
        Clear Selection
      </button>
    </div>
  );
}

export default SelectedUserDetails; // Экспорт компонента по умолчанию