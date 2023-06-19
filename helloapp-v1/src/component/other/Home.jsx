let HomeComponent = (props) => {

    return (

        <div>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-inner">

                    <div className="carousel-item active">

                        <img src="https://picsum.photos/id/1/1000/300" className="d-block w-100" alt="..." />

                    </div>

                    <div className="carousel-item">

                        <img src="https://picsum.photos/id/27/1000/300" className="d-block w-100" alt="..." />

                    </div>

                    <div className="carousel-item">

                        <img src="https://picsum.photos/id/28/1000/300" className="d-block w-100" alt="..." />

                    </div>

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">

                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                    <span className="visually-hidden">Previous</span>

                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">

                    <span className="carousel-control-next-icon" aria-hidden="true"></span>

                    <span className="visually-hidden">Next</span>

                </button>

            </div>
            <h3 className="mx-3 mt-4 fw-bold text-danger">Bank Details</h3>

            <hr />

            <p className="mx-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil autem dolor amet expedita voluptatibus aspernatur reprehenderit perferendis aperiam doloribus laborum iure, illum suscipit excepturi molestiae blanditiis nostrum eaque. Fugit, incidunt? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi facere totam voluptate nulla maxime incidunt, ullam, nemo nesciunt iste accusamus maiores, reiciendis earum explicabo. Beatae odit perspiciatis at illo eaque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas a quae neque nihil repellat, voluptatem corporis placeat recusandae omnis! Officia, assumenda ea! Placeat accusamus, eos suscipit velit aperiam sit explicabo!</p>



            <div>

      {props.imgList.map(title => {

        return <img src={title} Style="padding: 40px;width: 300px;height: 300px;"/>

      })}

    </div>

        </div>

    )

}



export default HomeComponent;