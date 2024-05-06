import React from 'react';
import './events.css';

function Events() {
    return (
        <div>
            <div className="table-box">
                <div className="table-header">
                    <p>EVENTS</p>
                </div>
                <div className="add-event">
                  <button className="add-new">+ADD EVENTS</button>
                </div>
                <div className="table-row table-head">
                    <div className="table-cell">
                        <p>ID</p>
                    </div>
                    <div className="table-cell">
                        <p>NAME</p>
                    </div>
                    <div className="table-cell">
                        <p>DATE</p>
                    </div>
                    <div className="table-cell">
                        <p>NUMBER OF PARTICIPANTS</p>
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
                        <p>abc</p>
                    </div>
                    <div className="table-cell last-cell">
                        <p>a</p>
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
                        <p>abc</p>
                    </div>
                    <div className="table-cell last-cell">
                        <p>b</p>
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
                        <p>abc</p>
                    </div>
                    <div className="table-cell last-cell">
                        <p>c</p>
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
                        <p>abc</p>
                    </div>
                    <div className="table-cell last-cell">
                        <p>d</p>
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
                        <p>abc</p>
                    </div>
                    <div className="table-cell last-cell">
                        <p>e</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
