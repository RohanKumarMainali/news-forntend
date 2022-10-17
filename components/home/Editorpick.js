import React from 'react'
import Head from 'next/head';
const Editorpick = () => {
    return (
        <>
            <Head>
                <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css' />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            </Head>
            <div className="continer my-5 py-5">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 layout-combo">
                        <article className="gridlove-post gridlove-post-b gridlove-box  post-174 post type-post status-publish format-video has-post-thumbnail hentry category-entertainment post_format-post-format-video">
                            <div className="entry-image me-4">
                                <img
                                    width={385}
                                    height={300}
                                    src="/images/croud.jpg"
                                    className="attachment-gridlove-b8 size-gridlove-b8 wp-post-image"
                                    alt=""
                                    loading="lazy" />
                            </div>
                            <div className="box-inner-ptbr box-col-b entry-sm-overlay">
                                <div className="box-inner-ellipsis">
                                    <div className='pt-2'>
                                        <div className="entry-category">
                                            <span className="gridlove-format-icon">
                                                <i className="fa fa-play" />
                                            </span>
                                            <span className='px-2 py-1 text-light fw-bold' style={{ borderRadius: '20px', fontSize: '11px', background: '#a66bbe' }}>Entertainment</span>
                                        </div>
                                        <h2 className="entry-title h3 mt-4">
                                            <p style={{ fontSize: '30px' }}>Are rock concerts really coming back into fashion?</p>

                                        </h2>
                                        <div className="entry-content mt-3">
                                            <p>
                                                Monotonectally pursue backward-compatible ideas without empowered
                                                imperatives. Interactively predominate low-risk high-yield ROI
                                                rather than adaptive e-tailers....
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="entry-meta mt-4 d-flex">
                                    <div className="meta-item d-flex meta-author">
                                        <div className="coauthors d-flex">
                                            <span className="vcard d-flex author">
                                                <span className="fn d-flex">
                                                    <img
                                                        alt=""
                                                        src="/images/croud.jpg"
                                                        className="avatar rounded-circle me-1 d-flex avatar-24 photo"
                                                        height={24}
                                                        width={24}
                                                        loading="lazy"
                                                    />
                                                    <span>
                                                        Patricia Callahan</span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="meta-item mx-2 meta-views">38,671 views</div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 right-cont">
                        <img className='editorpick-img2' src="/images/einstine.jpg" alt="" />
                        <div className="right-cont-top">
                            <span className='px-2 text-light bg-warning py-1' style={{ fontSize: '11px', borderRadius: '20px' }}>TECHNOLOGY</span>
                            <p className='fw-bold mt-3 text-light' style={{ fontSize: '20px' }}>The world needs true geniuses now more than ever</p>
                        </div>
                        <span className="v-card d-flex author">
                            <span className="fn d-flex">
                                <img
                                    alt=""
                                    src="/images/croud.jpg"
                                    className="avatar rounded-circle me-1 d-flex avatar-24 photo"
                                    height={24}
                                    width={24}
                                    loading="lazy"
                                />
                                <span>
                                    Patricia Callahan</span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Editorpick