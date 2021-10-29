import React from 'react'

const Error404 = () => {
    return (
        <div>
            <div className="bg-white">
                <div className="container" style={{paddingTop:'10rem', paddingBottom: '10rem'}}>
                    <div>
                        <h1 className="text-muted">Oops! parece que esta página no existe :'(</h1>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <h1 className="text-muted" style={{fontSize: '20rem'}}>404</h1>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Error404
