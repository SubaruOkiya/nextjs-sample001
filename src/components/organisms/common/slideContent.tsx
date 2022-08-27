export default function SlideContent() {
  return (
    <>
      <div className="card w-64 mx-16 bg-white align-middle shadow-2xl">
        <div className="card-body">
          <h2 className="card-title">ようこそ</h2>
          <form>
            <label className="label">名前</label>
            <input type="text" className="input input-primary" />
            <label className="label">問い合わせ内容</label>
            <input type="text" className="input input-primary" />
          </form>
        </div>
      </div>
    </>
  )
}
