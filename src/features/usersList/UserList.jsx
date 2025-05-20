import { useSelector } from "react-redux"; // Хук для чтения данных из Redux store
import { deleteUser, fetchUsers } from "./userListSlice"; // Импорт экшенов для получения и удаления пользователей
import { useDispatch } from "react-redux"; // Хук для отправки действий (dispatch)
import { selctedUser } from "../userDetails/userDetailsSlice"; // Экшен для выбора пользователя (возможно, ошибка в имени — должно быть selectedUser)

function UserList() {
  // Получаем список пользователей из Redux store
  const users = useSelector((state) => state.userList.users);

  // Получаем функцию dispatch для отправки действий
  const dispatch = useDispatch();

  return (
    <div className="user-list">
      <h2>User List</h2>

      {/* Кнопка загрузки пользователей с сервера */}
      <button className="load-btn" onClick={() => dispatch(fetchUsers())}>
        Load Users
      </button>

      {/* Список пользователей */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>
              {user.name} - {user.email} {/* Отображаем имя и email */}
            </span>

            <div className="btn-group">
              {/* Кнопка "Select" — выбираем пользователя по id */}
              <button
                className="select-btn"
                onClick={() => dispatch(selctedUser(user.id))}
              >
                Select
              </button>

              {/* Кнопка "Delete" — удаляем пользователя по id */}
              <button
                className="delete-btn"
                onClick={() => dispatch(deleteUser(user.id))}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList; // Экспорт компонента UserList по умолчанию
