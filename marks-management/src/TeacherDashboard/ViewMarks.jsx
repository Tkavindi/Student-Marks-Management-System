import React from 'react'
import './ViewMarks.css'
import { FaSearch } from "react-icons/fa";

const ViewMarks = () => (
  <>
    <div className='p-3 searchbox w-100 d-flex justify-content-center align-items-center'>
      <input type="text" placeholder="Search by Id" name="search" className='inpcol m-1' />
      <button type='submit'><FaSearch className='searchicon' /></button>
    </div>
    <div className='w-75 mx-auto tablesheet p-3'>
      <div>
        <h3 className='text-center text-light'>View Students Summery Sheet</h3>
      </div>
      <div className="table-responsive">
        <table className="table text-center table-bordered table-hover">
          <thead>
            <tr className="tablehead">
              <th scope="row">index</th>
              <th scope="col">Student ID</th>
              <th scope="col">Student Name</th>
              <th scope="col">Subject 1</th>
              <th scope="col">Subject 2</th>
              <th scope="col">Subject 3</th>
              <th scope="col">Subject 4</th>
              <th scope="col">Subject 5</th>
              <th scope="col">Subject 6</th>
              <th scope="col">Subject 7</th>
              <th scope="col">Subject 8</th>
              <th scope="col">Subject 9</th>
              <th scope="col">Total Marks</th>
              <th scope="col">Average Marks</th>
              <th scope="col">Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>1001</td>
              <td>Mark Otto</td>
              <td>85</td>
              <td>92</td>
              <td>78</td>
              <td>88</td>
              <td>76</td>
              <td>89</td>
              <td>90</td>
              <td>87</td>
              <td>91</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>1002</td>
              <td>Jacob Thornton</td>
              <td>75</td>
              <td>82</td>
              <td>88</td>
              <td>90</td>
              <td>79</td>
              <td>85</td>
              <td>84</td>
              <td>80</td>
              <td>86</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>1003</td>
              <td>Larry Bird</td>
              <td>65</td>
              <td>72</td>
              <td>68</td>
              <td>70</td>
              <td>69</td>
              <td>75</td>
              <td>74</td>
              <td>70</td>
              <td>76</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </>
)

export default ViewMarks