

function Email() {
    return(
        <div className='email'>
          <div className="container">
              <div className="row">
                  <div className="col-6"></div>
                  <div className="col-6">
                      <h3>Rezyume yuborish</h3>
                      <h4>Rezyumeyingizni yuboring va biz albatta ko’rib chiqamiz!</h4>

                      <p>Sizning ismingiz*</p>
                      <input type="text" className='form-control'/>
                      <div className='d-flex justify-content-between'>
                          <div>
                             <p>Telefon raqamingiz*</p>
                              <input type="text" className='form-control w-100'/>
                          </div>
                          <div>
                              <p>Telefon raqamingiz*</p>
                              <input type="text" className='form-control'/>
                          </div>

                      </div>

                      <p>O’zingiz haqida ma’lumot *</p>
                      <input type="text" className='form-control inp'/>


                      <p>Faylni biriktiring (.doc,.docx,.txt,.pdf 5Mb max)</p>
                      <button type='button' className='btn'>Yuborish</button>
                  </div>

              </div>
          </div>

        </div>
    )
}
export default Email;