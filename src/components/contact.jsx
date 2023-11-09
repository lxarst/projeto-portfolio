const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-zinc-900 h-screen max-w-[1040px] relative m-auto md:pl-20 p-4 py-16"
    >
      <h1 className="sm:text-4xl text-3xl py-4 font-bold text-center text-white">
        Contato
      </h1>
      <form
        action="https://getform.io/f/a9a9d9ad-e0b2-4c79-b528-79ab7b0a2bdc"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="text-white grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Nome</label>
            <input
              className="bg-zinc-850 text-white border-2 rounded-lg p-3 flex border-zinc-500"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Número</label>
            <input
              className="bg-zinc-850 text-white border-2 rounded-lg p-3 flex border-zinc-500"
              type="text"
              name="phone"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Email</label>
            <input
              className="bg-zinc-850 text-white border-2 rounded-lg p-3 flex border-zinc-500"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Assunto</label>
            <input
              className="bg-zinc-850 text-white border-2 rounded-lg p-3 flex border-zinc-500"
              type="text"
              name="subject"
              required
            />
          </div>
          <div className="lg:col-span-2 flex flex-col py-2">
            <label className="uppercase text-sm py-2">Mensagem</label>
            <textarea
              className="bg-zinc-850 text-white border-2 rounded-lg p-3 border-zinc-500"
              name="message"
              rows="10"
              required
            ></textarea>
          </div>
        </div>
        <button className="bg-neutral-700 text-white mt-4 w-full p-4 rounded-lg">
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default Contact;
