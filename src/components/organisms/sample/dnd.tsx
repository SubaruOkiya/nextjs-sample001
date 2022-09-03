import { useState } from 'react'

export default function DnD() {
  const [isDragging, setIsDragging] = useState(false)
  const [isDroppable, setIsDroppable] = useState(false)

  /**
   * drag item に関するイベント
   */
  /* drag itemを持ったとき */
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('non drag start', e)
    setIsDragging(true)
  }

  /* drag itemを放したとき */
  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('on drag end', e)
    setIsDragging(false)
  }

  /**
   * drop zone に関するイベント
   */
  /* Itemがdrag zoneに入ったとき */
  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('on drag enter', e)
    //if (e.currentTarget.id === 'drop-zone') {
    setIsDroppable(true)
    //}
  }

  /* Itemがdrag zoneから出たとき */
  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    // 放しても実行される
    console.log('on drag leave', e)
    //if (e.currentTarget.id === 'drop-zone') {
    setIsDroppable(false)
    //}
  }

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('on drop', e)
    //if (e.currentTarget.id === 'drop-zone') {
    setIsDroppable(false)
    //}
  }

  return (
    <div className="flex justify-center">
      {/* Drag Item */}
      <div
        className={`m-5 h-32 w-32 cursor-pointer rounded bg-teal-300 ${
          isDragging ? 'opacity-50' : ''
        }`}
        draggable // ドラッグを可能にする
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        // onDrag={(e) => console.log('on drag', e)} // ドラッグ中に発火するだけで未使用でもOK
      >
        drag item
      </div>

      {/* Drop Zone */}
      <div
        // id="drop-zone"
        className={`m-5 z-10 h-40 w-40 rounded border-4 bg-slate-400 ${
          isDroppable
            ? 'border-dashed border-slate-800'
            : 'border-solid border-slate-400 '
        }`}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={(e) => {
          e.preventDefault() // これがないとdropイベントが発火しない
        }}
        onDrop={onDrop}
      >
        drop zone
      </div>
    </div>
  )
}
