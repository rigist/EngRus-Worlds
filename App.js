import "./styles.css";
import { useState } from "react";

/*
Сделать сайт с английскими карточками для
заучивания. Юзер сам добавляет слова, которые
хочет учить на наш сайт.
Слова хранить в локальном хранилище юзера.
Реализовать управление словами. Юзер должен
видеть таблицу всех слов,
в ней он может поредактировать
слово и его перевод, а также удалить слово.
Кроме того, юзер может отметить слова,
которые он хочет изучать.
Можно также отменить все слова.
*/

//import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
let nanoid = (t = 21) => {
  let e = "",
    r = crypto.getRandomValues(new Uint8Array(t));
  for (; t--; ) {
    let n = 63 & r[t];
    e +=
      n < 36
        ? n.toString(36)
        : n < 62
        ? (n - 26).toString(36).toUpperCase()
        : n < 63
        ? "_"
        : "-";
  }
  return e;
};

const arrRusEngInit = [
  ["cat", "кот"],
  ["table", "стол"],
  ["tree", "дерево"]
];

export default function App() {
  const [worldsEngRus, setWorldsEngRus] = useState(arrRusEngInit);

  const [arrCheckbox, setArrCheckbox] = useState(
    worldsEngRus.map((item) => {
      return false;
    })
  );

  const resultWorlds = worldsEngRus.map((item, index) => {
    return (
      <tr key={nanoid()}>
        <td>
          <input
            type="checkbox"
            checked={arrCheckbox[index]}
            onChange={() =>
              setArrCheckbox([
                ...arrCheckbox.slice(0, index),
                !arrCheckbox[index],
                ...arrCheckbox.slice(index + 1)
              ])
            }
          />
        </td>
        <td>{item[0]}</td>
        <td>{item[1]}</td>
      </tr>
    );
  });

  const checkedWorlds = worldsEngRus.filter((item, index) => {
    if (arrCheckbox[index]) {
      return true;
    }
  });

  const resultCheckWorlds = checkedWorlds.map((item, index) => {
    return (
      <div key={nanoid()}>
        <p>
          {item[0]}-{item[1]}
        </p>
      </div>
    );
  });

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="checkbox"
                onChange={() => {
                  setArrCheckbox(
                    arrCheckbox.map((item) => {
                      return true;
                    })
                  );
                }}
              />
            </td>
            <td>eng</td>
            <td>rus</td>
          </tr>
          {resultWorlds}
        </tbody>
      </table>
      {resultCheckWorlds}
    </div>
  );
} //App
