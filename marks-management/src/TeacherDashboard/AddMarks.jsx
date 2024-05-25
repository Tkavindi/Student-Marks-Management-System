import React from 'react'
import './AddMarks.css'

const AddMarks = () => {
  return (
    <div>
        <div className=' d-flex justify-content-center align-items-center'>
        <div className=' AddMarks d-flex justify-content-center align-items-center w-75 rounded m-3'>
          <form action="" className='text-center text-light'><h3 className='text-center p-2'>Add Students Marks</h3>

            <label htmlFor="StudentId" className='m-3 text-center'>Student ID:</label>
            <input type="text" className='inpcol p-1' />
            <div className='Mandatory p-2'>

              <div className='d-flex h-25 justify-content-between'>

                <div>
                  <label htmlFor="Religion" className='m-3'>Religion :</label>
                  <input type="number" id="Religion" name="Religion" min="0" max="100" required />
                </div>
                <div>
                  <label htmlFor="Sinhala" className='m-3'>Sinhala :</label>
                  <input type="number" id="Sinhala" name="Sinhala" min="0" max="100" required />
                </div>
                <div className>
                  <label htmlFor="History" className='m-3'>History : </label>
                  <input type="number" id="History" name="History" min="0" max="100" required />
                </div>
              </div>

              <div className='d-flex h-25 justify-content-between'>

                <div className='p-1'>
                  <label htmlFor="Maths" className='m-3'>Maths : </label>
                  <input type="number" id="Maths" name="Maths" min="0" max="100" required />
                </div>
                <div>
                  <label htmlFor="Science" className='m-3'>Science :</label>
                  <input type="number" id="Science" name="Science" min="0" max="100" required />
                </div>
                <div>
                  <label htmlFor="English" className='m-3'>English :</label>
                  <input type="number" id="English" name="English" min="0" max="100" required />
                </div>
              </div>
            </div>


            <div className='Optional m-3'>


              <div className='1stGroup m-3'>
                <label htmlForfor="1st Group" className='w-25 text-start'>First Category : </label>
                <select id="1st Group" name="1st Group[]" className='w-50'required>

                  <option value="Business & Accounting Studies">Business & Accounting Studies</option>
                  <option value="Geography">Geography</option>
                  <option value="Civic Education">Civic Education</option>
                  <option value="Entrepreneurship Studies">Entrepreneurship Studies</option>
                  <option value="Second Language - Sinhala">Second Language - Sinhala</option>
                  <option value="Second Language - Tamil">Second Language - Tamil</option>
                  <option value="Pali Language">Pali Language</option>
                  <option value="Sanskrit Language">Sanskrit Language</option>
                  <option value="French Language">French Language</option>
                  <option value="German Language">German Language</option>
                  <option value="Hindi Language">Hindi Language</option>
                  <option value="Japanese Language">Japanese Language</option>
                  <option value="Arabic Language">Arabic Language</option>
                  <option value="Korean Language">Korean Language</option>
                  <option value="Chinese Language">Chinese Language</option>
                  <option value="Russian Language">Russian Language</option>
                </select>
                <input type="number" id="1st Group" name="1st Group" min="0" max="100" className='m-1' required />
              </div>

              <div className='2ndGroup m-3'>
                <label htmlForfor="2nd Group" className='w-25 text-start'>Second Category : </label>
                <select id="2nd Group" name="2nd Group[]" className='w-50' required>

                  <option value="Eastern Music">Eastern Music</option>
                  <option value="Western Music">Western Music</option>
                  <option value="Carnatic Music">Carnatic Music</option>
                  <option value="Eastern Dancing">Eastern Dancing</option>
                  <option value="Bharatha Dancing">Bharatha Dancing</option>
                  <option value="Art">Art</option>
                  <option value="Appreciation of English Literary Texts (English Literature)">English Literature</option>
                  <option value="Appreciation of Sinhala Literary Texts (Sinhala Literature)">Sinhala Literature</option>
                  <option value="Appreciation of Tamil Literary Texts (Tamil Literature)">Tamil Literature</option>
                  <option value="Appreciation of Arabic Literary Texts (Arabic Literature)">Arabic Literature</option>
                  <option value="Drama and Theatre">Drama and Theatre</option>
                </select>
                <input type="number" id="2nd Group" name="2nd Group" min="0" max="100" className='m-1' required />
              </div>


              <div className='3rdGroup m-3'>
                <label htmlForfor="3rd Group" className='w-25 text-start'>Third Category : </label>
                <select id="3rd Group" name="3rd Group[]" className='w-50' required>
                  <option value="Information & Communication Technology">Information & Communication Technology</option>
                  <option value="Agriculture & Food Technology">Agriculture & Food Technology</option>
                  <option value="Aquatic Bio resources Technology">Aquatic Bio resources Technology</option>
                  <option value="Arts & Crafts">Arts & Crafts</option>
                  <option value="Home Economics">Home Economics</option>
                  <option value="Health & Physical Education">Health & Physical Education</option>
                  <option value="Communication & Media Studies">Communication & Media Studies</option>
                  <option value="Design & Construction Technology">Design & Construction Technology</option>
                  <option value="Design & Mechanical Technology">Design & Mechanical Technology</option>
                  <option value="Design, Electrical & Electronic Technology">Design, Electrical & Electronic Technology</option>
                  <option value="Electronic Writing & Shorthand">Electronic Writing & Shorthand</option>

                </select>
                <input type="number" id="3rd Group" name="2nd Group" min="0" max="100" className='m-1' required />
              </div>
            </div>
            <button className='btn Submitbtn w-100 m-2 text-light'>Submit</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default AddMarks