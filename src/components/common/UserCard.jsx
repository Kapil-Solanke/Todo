import React, { useContext, useEffect, useState } from 'react'
import {BiDotsHorizontalRounded,BiSignal2,BiSignal3,BiSignal4,BiSignal5} from 'react-icons/bi'
import {GoDotFill} from 'react-icons/go'
import '../common/UserCard.css'
import selectContext from '../../context/selectContext'
const UserCard = ({user}) => {
  // bring data from selectContext
  const {data}=useContext(selectContext);
  const [userImg,setUserImg] = useState(null); //intialize state variable userImg

  useEffect(()=>{
    // function to get Img of user using his first name and last name
    async function getImg(){
      // filter user basis on user id
      let obj=data?.users.filter((curr) => {
        return curr.id===user.userId;
      });
      let name=obj[0]?.name;
      if(name){
        let firstName=name.split(' ')[0];
        let lastName=name.split(' ')[1];
        let image=`https://api.dicebear.com/5.x/initials/svg?seed=${firstName}${lastName}`
        // console.log('the user image is: ' + image);
        setUserImg(image);
      }
      // console.log('the userImg is: ' + userImg);
    }
    getImg();
  },[user]);
  return (
    <div className='card-container'>
      <div className='first-row'>
        {/* id */}
        <div className='user-id'>
          {user?.id}
        </div>
        {/* image */} 
        <div className='user-image'>
          {userImg&&<img src={userImg} alt='UserImage'></img>}
        </div>
      </div>
      {/* title */}
      <div className='second-row'>
        {user?.title.substr(0,20)+"..." }
      </div>
      <div className='third-row'>
        {/* icon */}
        <div>
          <BiDotsHorizontalRounded/>
        </div>
        {/* icon */}
        <div>
          <GoDotFill/>
        </div>
        {/* tag */}
        <div>
          {user?.tag[0]}
        </div>
      </div>
    </div>
  )
}

export default UserCard