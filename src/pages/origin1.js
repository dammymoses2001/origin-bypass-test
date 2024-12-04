import React from "react";

export default function Origin1() {
  return (
    <div>
      <div className="text-center text-3xl mt-3">
        this is different origin without access
      </div>
      <iframe
        src="https://form-iframer.vercel.app/dashboard"
        title="Example iframe"
        frameBorder="0"
        width="100%"
        height="700"
      ></iframe>
      <form>
        <label>
          Name:
          <input className="border" type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input className="border" type="email" name="email" />
        </label>
        <br />
        <input className="border" type="submit" value="Submit" />
      </form>
    </div>
  );
}
