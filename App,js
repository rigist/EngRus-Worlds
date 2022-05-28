import "./styles.css";
import { useState } from "react";

/*
Сделать сайт с английскими карточками для
заучивания. Юзер сам добавляет слова, которые
хочет учить на наш сайт.[]
Слова хранить в локальном хранилище юзера.[]
Реализовать управление словами. Юзер должен
видеть таблицу всех слов,[]
в ней он может поредактировать[]
слово и его перевод, а также удалить слово.[]
Кроме того, юзер может отметить слова,[]
которые он хочет изучать.
Можно также отменить все слова.[]
*/

/*
220522
20-42

260522
14-58 15-07
15-23

280521
14-41
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

const arrWorldsInit = [
  { id: 1, eng: "cat", rus: "кот" },
  { id: 2, eng: "cat2", rus: "кот2" },
  { id: 3, eng: "cat3", rus: "кот3" },
  { id: 4, eng: "cat4", rus: "кот4" },
  { id: 5, eng: "cat5", rus: "кот5" }
];

const arrEngInit = ["cat1", "cat2", "cat3", "cat4"];

const arrRusInit = ["кот1", "кот2", "кот3", "кот4"];

// ['cat',], ['кот',]

const arrRusEngInit = [
  ["cat", "кот"],
  ["table", "стол"],
  ["tree", "дерево"]
];

export default function App() {
  /* const [worldsEng, setWorldsEng] = useState(arrEngInit);
  const [worldsRus, setWorldsRus] = useState(arrRusInit); */

  const [worldsEngRus, setWorldsEngRus] = useState(arrRusEngInit);

  const resultWorlds = worldsEngRus.map((item, index) => {
    return (
      <tr key={nanoid()}>
        <td>ch</td>
        <td>{item[0]}</td>
        <td>{item[1]}</td>
        <td>del</td>
      </tr>
    );
  });

  /*  const [worlds, setWorlds] = useState([arrEngInit, arrRusInit]); */
  /*  console.log("worlds 64", worlds);
  console.log("worlds 65", worlds.flat()); */
  /* const resultTableEng = worlds[0].map((item, index) => {
    return (
      <ul key={nanoid()}>
        <li>{item}</li>
      </ul>
    );
  });
  const resultTableRus = worlds[1].map((item, index) => {
    return (
      <ul key={nanoid()}>
        <li>{item}</li>
      </ul>
    );
  }); */

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <td>checbox</td>
            <td>eng</td>
            <td>rus</td>
            <td>del</td>
          </tr>
          {resultWorlds}
        </tbody>
      </table>
    </div>
  );
} //App
