import YourSvgIcon from '../animate.gif';
function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center">
       <div className=' vh-80 d-flex justify-content-center align-items-center'>
        <img src={YourSvgIcon} className='loaderImg' alt="loading"  /> 
       </div>
    </div>
  )
}

export default Loading
