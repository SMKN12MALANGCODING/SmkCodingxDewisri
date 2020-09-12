import React, { Component } from 'react'
import { postFunction, responseData } from '../../models/Model';
import { ADD_DAILY_JOURNAL } from '../../system/Strings';


const Modal = ({ handleClose, show, children, state, method }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="col-md-12">
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Tambah Hasil Panen</h5>
                  <button type="button" class="close" onClick={handleClose} data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    <div class="form">
                        <form class="php-email-form">
                            <div class="form-group">
                                <label for="tanggal">Tanggal Panen</label>
                                <input type="date" name="tanggal" onChange={(text) => method.changeState('tanggalPanen',text)} class="form-control" id="tanggal" placeholder="Tanggal" required={true}/>
                                <div class="validate"></div>
                            </div>
                            <div class="form-group">
                                <label for="hargaPasar">Harga Pasar</label>
                                <input type="number" name="hargaPasar" onChange={(text) => method.changeState('hargaPasar',text)} class="form-control" id="hargaPasar" placeholder="Harga Pasar" required={true}/>
                                <div class="validate"></div>
                            </div>

                            <div class="form-group">
                                <label for="hasilPanen">Hasil Panen</label>
                                <input type="number" name="hasilPanen" onChange={(text) => method.changeState('hasilPanen',text)} class="form-control" id="hasilPanen" placeholder="Hasil Panen" required={true}/>
                                <div class="validate"></div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                  <button type="button" onClick={() => method.addData()} class="btn btn-custom">Tambah Data</button>
                </div>
              </div>
            </div>
        </section>
      </div>
    );
  };



export default class CatatanPertanian extends Component {
    constructor(props){
        super(props);
        this.state = {
            tanggalPanen: '',
            showModal: false,
            hargaPasar: '',
            hasilPanen: ''
        }
        this.method = {
            modalShowHide: this.modalShowHide.bind(this),
            changeState: this._changeState.bind(this),
            addData: this._addData.bind(this),
        }
        this.modalShowHide = this.modalShowHide.bind(this)
    }

    modalShowHide(){
        this.setState({
            showModal: !this.state.showModal
        })
    }
    _changeState(state,value){
        this.setState({
            [state]: value.target.value
        })
    }

    async _addData(){
        var data = new FormData()
        
        data.append('activity', this.state.activity)
        data.append('problem', this.state.problem)
        data.append('owner_journalId',this.props.state.journalDataByDate[0]._id)
        data.append('owner_userId',this.props.state.userData._id)

        await postFunction(data, ADD_DAILY_JOURNAL).then(() => {
            if (responseData.status == 200) {
                console.log("success");
                alert("Sukses menambah jurnal harian")
                this.setState({
                    showModal: !this.state.showModal,
                })
                window.location.reload(false)

            } else {
                alert(responseData.message)
            }
        })

    }

    render() {
        return (
            <section id="content" className="my-5">
                <Modal show={this.state.showModal} state={this.state} method={this.method} handleClose={this.modalShowHide}></Modal>
                    
                <div className="container">
                    <div className="card-catatan-pertanian">
                        <div className="row">
                            <div className="col">
                                <div className="section-header">
                                    <h3 className="section-title">Hasil Panen</h3>
                                    <span className="section-divider"></span>
                                </div>
                            </div>
                        </div>
                        <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Tanggal Input</th>
                                        <th>Jumlah</th>
                                        <th>Harga</th>
                                        <th>Keterangan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>10 - 8 - 2000</td>
                                        <td>100</td>
                                        <td>1.000.000</td>
                                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, architecto?</td>
                                    </tr>
                                    <tr>
                                        <td>10 - 8 - 2000</td>
                                        <td>100</td>
                                        <td>1.000.000</td>
                                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, architecto?</td>
                                    </tr>
                                    <tr>
                                        <td>10 - 8 - 2000</td>
                                        <td>100</td>
                                        <td>1.000.000</td>
                                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, architecto?</td>
                                    </tr>
                                </tbody>
                            </table>
                        <button className="btn-get-started mt-2" onClick={this.modalShowHide}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                            </svg>
                            <span class="d-none d-md-inline text-light ml-1">Tambah Data</span>
                        </button>
                        <a href="#" className="btn-get-started mt-3">Download Data</a>
                    </div>
                </div>
            </section>
        )
    }
}