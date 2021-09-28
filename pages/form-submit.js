import { useState } from "react";
import Link from "next/link";
function FormSubmit() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName);
    setFirstName("");
    setLastName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            id="firstName"
          />
        </label>

        <br />
        <label htmlFor="lastName">
          Last Name:
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </label>

        <br />
        <button>Submit</button>
      </form>
      <h4 className="mt-2">Check Console Log</h4>
      <h2 className="text-blue-700 mt-3">
        <Link href="/two-way-data-binding">Go to two way binding</Link>
      </h2>
    </div>
  );
}

export default FormSubmit;
