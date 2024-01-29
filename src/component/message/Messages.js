import React from "react";
import profile from "../../assets/images/bluewallet.png";

function Messages() {
  return (
    <>
      <div classNameName="col-lg-12">
        <div className="pagetitle">
          <h1>Messages</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active">Messages</li>
            </ol>
          </nav>
        </div>

        <section className="section contact">
          <div className="row gy-4">
            <div className="col-xl-12">
              <div className="messages card p-4">
                <ul className="list-unstyled">
                  <li class="message-item border-bottom">
                    <a href="#">
                      <img src={profile} alt="" class="rounded-circle" />
                      <div>
                        <h4>Maria Hudson</h4>
                        <p>
                          Velit asperiores et ducimus soluta repudiandae labore
                          officia est ut...
                        </p>
                        <p>4 hrs. ago</p>
                      </div>
                    </a>
                  </li>

                  <li class="message-item border-bottom">
                    <a href="#">
                      <img src={profile} alt="" class="rounded-circle" />
                      <div>
                        <h4>Anna Nelson</h4>
                        <p>
                          Velit asperiores et ducimus soluta repudiandae labore
                          officia est ut...
                        </p>
                        <p>6 hrs. ago</p>
                      </div>
                    </a>
                  </li>

                  <li class="message-item border-bottom">
                    <a href="#">
                      <img src={profile} alt="" class="rounded-circle" />
                      <div>
                        <h4>David Muldon</h4>
                        <p>
                          Velit asperiores et ducimus soluta repudiandae labore
                          officia est ut...
                        </p>
                        <p>8 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Messages;
