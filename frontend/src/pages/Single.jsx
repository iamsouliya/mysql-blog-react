import React from 'react'
import { Link } from 'react-router-dom'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1664154026818-b49c159c91d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1664154026818-b49c159c91d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
          <div className="info">
            <span>Nexsiz</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit" />
            </Link>
            <img src={Delete} alt="delete" />
          </div>
        </div>
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere qui
          dicta neque modi vitae ipsa fugit corrupti officia rem voluptas.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse,
          rem earum iure eos maxime ex! Nihil eveniet delectus consequatur
          necessitatibus excepturi numquam, iure quasi quibusdam unde rerum,
          perferendis fuga. Sunt dolorem ipsam nam adipisci blanditiis, rem
          minus inventore necessitatibus atque asperiores corrupti animi
          repellendus! Quam cupiditate magnam cumque iste vitae dicta ipsa amet
          deserunt, nulla corrupti expedita, temporibus sunt similique
          consectetur doloremque laborum! Deserunt esse pariatur nihil quas,
          illo unde expedita adipisci hic voluptate magni placeat exercitationem
          assumenda officiis impedit quisquam, ea accusantium ipsum, odio harum
          commodi magnam doloremque aut quae recusandae. Maiores non deleniti
          quis repudiandae officia accusamus.
        </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single
