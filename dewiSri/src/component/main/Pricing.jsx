import React, {Component} from 'react'

export default class Pricing extends Component {
    showPricing() {
        const modalContent = document.querySelector('#staticBackdropPricng .modal-body');
        const modalFooter = document.querySelector('#staticBackdropPricng .modal-footer');

        modalContent.innerHTML = `
        <div class="row">
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
        `
        modalFooter.innerHTML = `
                <button type="submit" id="btn-content-next-validation" class="btn btn-custom" title="Send Message">Beli / Langganan</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Kembali</button>
            `
    }

    showStep() {
        
    }

    render() {
        return (
            <section id="content" className="section-bg">
                <div className="section-header-content">
                    <div className="foto-petani">
                        {/* <img src="../../assets/img/petani/petani1.jpg" alt=""/> */}
                        {/* <img src="../../assets/img/petani/petani2.jpg" alt=""/>
                        <img src="../../assets/img/petani/petani3.jpg" alt=""/>
                        <img src="../../assets/img/petani/petani4.jpg" alt=""/> */}
                        <h1 className="section-title-content">Plant It Premium</h1>
                    </div>
                    <span className="section-divider"></span>
                </div>
                <div className="container">
                    <div className="container">
                        <div className="row">
                            <table className="table-striped table-content">
                                <thead className="table-header">
                                    <tr>
                                        <td>Fitur</td>
                                        <td>Gratis</td>
                                        <td>Premium</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Analisis Keuntungan Bersih</td>
                                        <td>-</td>
                                        <td><img src="assets/img/leaf.svg" alt=""/></td>
                                    </tr>
                                    <tr>
                                        <td>Download Jurnal</td>
                                        <td>-</td>
                                        <td><img src="assets/img/leaf.svg" alt=""/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row btn-content">
                            <button className="btn btn-dark" onClick={this.showPricing} data-toggle="modal" data-target="#staticBackdropPricng">Rp29.999,-/bulan</button>
                            <button className="btn btn-dark">Rp85.000,_/musim</button>
                            <button className="btn btn-dark">Rp320.000,_/tahun</button>
                            <button className="btn btn-dark">Rp1.800.000,_/selamanya</button>
                            <button id="btn-not" className="btn btn-dark">Nanti Dulu</button>
                        </div>
                    </div>
                </div>
            </section>
        
        )
    }
}
