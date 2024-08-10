
const Table=()=>{
    return(

        <div className="overflow-x-auto table-fixed bg-gray-50 w-full">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th className=" bg-slate-200"><b>Eligibility Conditions to enroll in MBA-Shipping and Logistics Management</b></th>
        <th className="bg-slate-300">Eligibility Conditions to enroll in BBA or B.Com
        </th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>10th Std + 12th Std + 3-year UG degree or</td>
        <td>10th Std + 12th Std or</td>
       
      </tr>
      {/* row 2 */}
      <tr>
        
        <td>10th Std + 12th Std + 4-year UG degree or</td>
        <td>10th Std + Diploma or</td>
        
      </tr>
      {/* row 3 */}
      <tr>
        
        <td>Certificate of Competency (COC) of Seafarers</td>
        <td>Equivalent to 10+2</td>
       
      </tr>
      <tr>
        <td>Any degree recognised of the University</td>
      </tr>
    </tbody>
  </table>
  
</div>

    )
}

export default Table;