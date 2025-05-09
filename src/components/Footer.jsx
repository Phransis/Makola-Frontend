import React from 'react'

function Footer() {
  return (
      <div>
            <footer className="py-3 bg-light text-center text-lg-start fixed-bottom">
              <div className="container text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                  <div>
                        <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-facebook-f"></i
                        ></a>
    
                        <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-twitter"></i
                        ></a>
    
                        <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-google"></i
                        ></a>
    
                        <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-instagram"></i
                        ></a>
    
                        <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-linkedin"></i
                        ></a>
    
                        <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-github"></i
                        ></a>
                  </div>
                    © 2025 Makola:
                    <a className="text-dark" href="https://mdbootstrap.com/"> makola.com</a>
                </div>
            </footer>
    </div>
  )
}

export default Footer