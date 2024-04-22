import './App.css'
import React from 'react'

const EMOJIS_URL = {
  LUL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4-rfpZcBc2tT9ooFP2EKfi5F72eAZuGPCL9d2swFJg&s",
  OMEGALUL: "https://cdn.vox-cdn.com/thumbor/wlretfTshZ1W8kbe_VzSXeQHwkI=/0x0:759x800/1200x0/filters:focal(0x0:759x800):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10838101/omegalul.jpg.jpg",
  kirby: "https://cdn3.emoji.gg/emojis/2539-kirby.png",
}

function appendEmojis(word, i) {
  const isEmoji = Object.keys(EMOJIS_URL).includes(word)
  if (isEmoji) return <Emoji key={i} word={word} />
  return <span key={i}>{word}</span>
}

function spaceThem(bit, i, arr) {
  const lastItem = i === (arr.length - 1)
  return (
    <React.Fragment key={i}>
      {bit}{lastItem ? "" : " "}
    </React.Fragment>
  )
}

function format(body, i) {
  return (
    <div key={i}>
      {body.split(" ").map(appendEmojis).map(spaceThem)}
    </div>
  )
}

function App() {
  const STRINGS = Object.freeze([
    "hezary HAHAHA kirby",
    "store",
    "store LUL",
    "store LUL hezary",
    "OMEGALUL hezary",
  ]).map(format)

  return (
    <>
      {STRINGS}
    </>
  )
}

export default App

function Emoji({ word }) {
  return <img src={EMOJIS_URL[word]} style={{ width: "1rem" }} alt={word} />
}
