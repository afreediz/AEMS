import React from 'react';
import './users.css'
function Users() {
    return (
        <div className="table-box">
            <div className="table-header">
                <p>USERS</p>
            </div>
            <div className="add-users">
              <button className="add-new">+ADD USERS</button>
            </div>
            <div className="table-row table-head">
                <div className="table-cell">
                    <p>ID</p>
                </div>
                <div className="table-cell">
                    <p>NAME</p>
                </div>
                <div className="table-cell">
                    <p>EMAIL</p>
                </div>
                <div className="table-cell">
                    <p>NUMBER</p>
                </div>
                <div className="table-cell">
                    <p>EVENT</p>
                </div>
            </div>
            <div className="table-row">
                <div className="table-cell first-cell">
                    <p>1</p>
                </div>
                <div className="table-cell d">
                    <p>user1</p>
                </div>
                <div className="table-cell">
                    <p>abc@gmail.com</p>
                </div>
                <div className="table-cell">
                    <p>1234567892</p>
                </div>
                <div className="table-cell last-cell">
                    <p>abc</p>
                </div>
            </div>
            <div className="table-row">
                <div className="table-cell first-cell">
                    <p>2</p>
                </div>
                <div className="table-cell d">
                    <p>user2</p>
                </div>
                <div className="table-cell">
                    <p>abc@gmail.com</p>
                </div>
                <div className="table-cell">
                    <p>1234567892</p>
                </div>
                <div className="table-cell last-cell">
                    <p>abc</p>
                </div>
            </div>
            <div className="table-row">
                <div className="table-cell first-cell">
                    <p>3</p>
                </div>
                <div className="table-cell d">
                    <p>user3</p>
                </div>
                <div className="table-cell">
                    <p>abc@gmail.com</p>
                </div>
                <div className="table-cell">
                    <p>1234567892</p>
                </div>
                <div className="table-cell last-cell">
                    <p>abc</p>
                </div>
            </div>
            <div className="table-row">
                <div className="table-cell first-cell">
                    <p>4</p>
                </div>
                <div className="table-cell d">
                    <p>user4</p>
                </div>
                <div className="table-cell">
                    <p>abc@gmail.com</p>
                </div>
                <div className="table-cell">
                    <p>1234567892</p>
                </div>
                <div className="table-cell last-cell">
                    <p>abc</p>
                </div>
            </div>
            <div className="table-row">
                <div className="table-cell first-cell">
                    <p>5</p>
                </div>
                <div className="table-cell d">
                    <p>user 5</p>
                </div>
                <div className="table-cell">
                    <p>abc@gmail.com</p>
                </div>
                <div className="table-cell">
                    <p>1234567892</p>
                </div>
                <div className="table-cell last-cell">
                    <p>abc</p>
                </div>
            </div>
        </div>
    );
}

export default Users;