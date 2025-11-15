import { useState } from 'react'

function App() {
  const [clientname, setClientName] = useState("")
  const [potype, setPoType] = useState("")
  const [ponumber, setPoNumber] = useState("")
  const [received, setReceived] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Form submitted");
  };
  return (
    <>
      <div className="container my-5">
        <h4>Purchase order details</h4>
        <form onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col-3">
              <label>Client Name*</label>
              <select className="form-control w-100">
                <option>Abc</option>
                <option>Xyz</option>
              </select>
            </div>
            <div className="col-3">
              <label>Purchase order type</label>
              <select className="form-control w-100">
                <option>Group OP</option>
                <option>Individual PO</option>
              </select>
            </div>
            <div className="col-3">
              <label>Purchase order no</label>
              <input type="text" placeholder="PO Number" className="form-control w-100" />
            </div>
            <div className="col-3">
              <label>Received On</label>
              <input type="date" placeholder="Received On" className="form-control w-100" />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-3">
              <label>Received From</label>
              <input type="text" placeholder="Received From" className="form-control w-100" />
            </div>
            <div className="col-3">
              <label></label>
              <input type="text" placeholder="Received From Email ID" className="form-control w-100" />
            </div>
            <div className="col-2">
              <label>Po start date</label>
              <input type="date" placeholder="Po start date" className="form-control w-100" />
            </div>
            <div className="col-2">
              <label>Po end date</label>
              <input type="date" placeholder="Po end date" className="form-control w-100" />
            </div>
            <div className="col-1">
              <label>Budget</label>
              <input type="number" placeholder="Budget" className="form-control w-100" />
            </div>
            <div className="col-1">
              <label>Currency</label>
              <select className="form-control w-100">
                <option>INR</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>

          <div className="text-end mt-3">
            <button className="btn btn-outline-primary btn-sm">+ Add another</button>
          </div>

          <div className="container">
            <h4 className="mb-3">Talent Details</h4>
            <div className="row">
              <div className="col-3">
                <label className="form-label">Job Title/REQ Name *</label>
                <select className="form-control">
                  <option>Application Development</option>
                  <option>Testing</option>
                </select>
              </div>
              <div className="col-3">
                <label className="form-label">Job ID / REQ ID*</label>
                <input className="form-control" type="text" />
              </div>
            </div>
          </div>

          <div className="p-3">
            <div className="d-flex align-items-center">
              <input type="checkbox" className="form-check-input me-2" />
              <label className="fw-semibold">Monika Goyal Test</label>
            </div>

            <div className="row">
              <div className="col-3">
                <label>Contract Duration</label>
                <input className="form-control" placeholder="Contract Duration" />
              </div>
              <div className="col-2">
                <label>Bill Rate</label>
                <input className="form-control" placeholder="Bill Rate" />
              </div>
              <div className="col-2">
                <label>Currency</label>
                <select className="form-control">
                  <option>INR</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>
              <div className="col-2">
                <label>Standard Time BR </label>
                <input className="form-control" placeholder="Std. Time BR/hr" />
              </div>
              <div className="col-2">
                <label>Over Time BR</label>
                <input className="form-control" placeholder="Over Time Br/hr" />
              </div>
              <div className="col-1">
                <label>Currency</label>
                <select className="form-control">
                  <option>INR</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-3">
            <div className="d-flex align-items-center">
              <input type="checkbox" className="form-check-input me-2" />
              <label className="fw-semibold">Shaili Khatri</label>
            </div>

            <div className="row">
              <div className="col-3">
                <label>Contract Duration</label>
                <input className="form-control" placeholder="Contract Duration" />
              </div>
              <div className="col-2">
                <label>Bill Rate</label>
                <input className="form-control" placeholder="Bill Rate" />
              </div>
              <div className="col-2">
                <label>Currency</label>
                <select className="form-control">
                  <option>INR</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>
              <div className="col-2">
                <label>Standard Time BR </label>
                <input className="form-control" placeholder="Std. Time BR/hr" />
              </div>
              <div className="col-2">
                <label>Over Time BR</label>
                <input className="form-control" placeholder="Over Time Br/hr" />
              </div>
              <div className="col-1">
                <label>Currency</label>
                <select className="form-control">
                  <option>INR</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default App
