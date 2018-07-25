'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isIphoneX = exports.userInfo = exports.baseUrl = exports.refundStatusInfo = exports.noticeInfo = exports.handleStatusInfo = exports.statusInfo = exports.stream = exports.domModule = exports.cacheName = exports.imageUrls = exports.isDebug = exports.animation = undefined;


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var animation = requireModule('animation');
// var stream = requireModule('stream');
// var domModule = requireModule('dom');
// var modal = requireModule('modal');
var isDebug = false;

var imageUrls = {
    banner: {
        officialPartner: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/official-partner.png',

        response: 'https://daliaoyuncom.oss-cn-beijing.aliyuncs.com/qcbang/banner/19.jpg',

        responseActive: 'https://daliaoyuncom.oss-cn-beijing.aliyuncs.com/qcbang/banner/res-19.jpg',

        coupon: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/coupon.jpg',

        brandCase: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/brand-case.jpg',

        logo: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/logo.jpg',

        album: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/album.jpg',

        card: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/card.jpg',

        poster: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/poster.jpg',

        folding: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/folding.png',

        page: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/page.png',

        record: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/record.jpg',

        bannerOne: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/banner-one.jpg',

        activeBanner: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/active-banner.jpg',

        newActiveBanner: 'https://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/active-banner-new.png',

        activeBanner1: 'https://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/active-banner-01.png',

        activeBanner2: 'https://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/active-banner-02.png',

        activeBanner3: 'https://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/active-banner-03.png',

        activeBanner4: 'https://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/active-banner-04.png',

        activeBanner5: 'https://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/active-banner-05.png',

        '01': 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/banner-01.jpg',

        '02': 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/banner-02.jpg',

        '03': 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/banner-03.jpg',

        '04': 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/banner-04.jpg',

        '05': 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/banner-05.jpg',

        '06': 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/banner-06.jpg',

        '07': 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/banner-07.jpg',

        unable03: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/unable-banner-03.jpg',

        unable04: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/unable-banner-04.jpg',

        unable05: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/banner/unable-banner-05.jpg'
    },

    case: {
        logo: {
            seniorLeft: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/logo/senior-left.png',

            seniorRight: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/logo/senior-right.png',

            directorLeft: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/logo/director-left.png',

            directorRight: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/logo/director-right.png',

            expertLeft: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/logo/expert-left.png',

            expertRight: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/logo/expert-right.png'
        },

        card: {
            seniorLeft: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/card/senior-left.png',

            seniorRight: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/card/senior-right.png',

            directorLeft: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/card/director-left.png',

            directorRight: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/card/director-right.png',

            expertLeft: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/card/expert-left.png',

            expertRight: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/card/expert-right.png'
        },

        poster: {
            seniorLeft: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/poster/senior-left.jpg',

            seniorRight: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/poster/senior-right.jpg',

            directorLeft: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/poster/director-left.jpg',

            directorRight: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/poster/director-right.jpg',

            expertLeft: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/poster/expert-left.jpg',

            expertRight: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/poster/expert-right.jpg'
        },

        album: {
            seniorLeft: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/album/senior-left.png',

            seniorRight: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/album/senior-right.png',

            directorLeft: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/album/director-left.png',

            directorRight: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/album/director-right.png',

            expertLeft: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/album/expert-left.png',

            expertRight: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/album/expert-right.png',

            printSpecification: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/album/printSpecification.png',

            printReference: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/album/print-reference.jpg',

            printItem: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/album/print-item.jpg'
        },

        folding: {
            seniorLeft: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/folding/senior-left.png',

            seniorRight: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/folding/senior-right.png',

            directorLeft: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/folding/director-left.png',

            directorRight: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/folding/director-right.png',

            expertLeft: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/folding/expert-left.jpg',

            expertRight: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/folding/expert-right.jpg',

            printSpecification: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/folding/printSpecification.png',

            printReference: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/folding/print-reference.jpg',

            printA4Two: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/folding/print-A4-2.jpg',

            printA5Two: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/folding/print-A5-2.jpg',

            printA3Two: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/folding/print-A3-2.jpg',

            printA4Three: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/folding/print-A4-3.jpg',

            printA3Three: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/folding/print-A3-3.jpg',

            printA3Four: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/folding/print-A3-4.jpg'
        },

        page: {
            seniorLeft: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/page/senior-left.png',

            seniorRight: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/page/senior-right.png',

            directorLeft: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/page/director-left.png',

            directorRight: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/page/director-right.png',

            expertLeft: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/page/expert-left.png',

            expertRight: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/page/expert-right.png',

            printSpecification: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/page/printSpecification.png',

            printReference: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/page/print-reference.jpg',

            printItemTop: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/page/print-item-top.jpg',

            printItemBottom: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/case/page/print-item-bottom.jpg'
        }
    },

    navigation: {
        folder: 'https://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/folder.png',

        arrowBlue: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/arrow-blue.png',

        closeButton: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/close-button.png',

        consultBtn: 'https://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/consult-btn.png',

        bangButton: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/bang-button.png',

        brand: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/brand.png',

        right: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/right.jpg',

        services: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/services.png',

        star: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/star.png',

        minus: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/minus.png',

        add: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/add.png',

        title: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/title.png',

        like: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/fulled-like.png',

        unLike: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/unfulled-like.png',

        customService: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/custom-service.png',

        customServiceInfo: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/custom-service-info.png',

        track: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/track.png',

        praise: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/praise.png',

        preview: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/preview.png',

        background: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/background.png',

        idea: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/idea.png',

        projection: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/projection.png',

        seniorDesigner: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/senior.png',

        directorDesigner: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/director.png',

        expertDesigner: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/expert.png',

        seniorAdviser: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/senior-adviser.png',

        motionDesigner: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/motion-designer.png',

        newStar: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/new-star.png',

        consultSuspend: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/consult-suspend.png',

        discountNum: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/discountNum.png',

        rightArrow: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/right-arrow.png',

        blueNav: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/blue-nav.png',

        top: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/top.png',

        discount: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/discount.png',

        logo: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/logo.png',

        cancel: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/cancel.png',

        loading: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/loading.gif',

        filledRadio: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/filled-radio.png',

        unfilledRadio: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/unfilled-radio.png',

        submitBtn: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/submit-button.png',

        disSubmitBtn: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/dis-submit-button.png',

        fileIcon: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/file-img.png',

        refund_1: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/refund_1.png',

        refund_2: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/refund_2.png',

        refund_4: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/refund_3.png',

        waiting: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/waiting.png',

        btnBg: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/btn-bg.png',

        noOrder: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/no-order.png',

        triangle: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/triangle.png',

        to: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/to.png',

        bluePhone: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/blue-phone.png',

        download: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/download.png',

        ensure: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/ensure.png',

        satisfy: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/satisfy.png',

        unsatisfy: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/unsatisfy.png',

        source: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/source.png',

        wrapper: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/wrapper.png',

        starSelected: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/star-selected.png',

        starUnselected: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/star-unselected.png',

        designerBg: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/design-info-bg.png',

        design_flow_0: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/design_flow_0.png',

        design_flow_1: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/design_flow_0.png',

        design_flow_2: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/design_flow_1.png',

        design_flow_3: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/design_flow_2.png',

        design_flow_4: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/design_flow_3.png',

        design_flow_5: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/design_flow_4.png',

        design_flow_6: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/design_flow_5.png',

        design_flow_7: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/design_flow_6.png',

        design_flow_8: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/design_flow_7.png',

        video_flow_0: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/video_flow_0.png',

        video_flow_1: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/video_flow_0.png',

        video_flow_2: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/video_flow_1.png',

        video_flow_3: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/video_flow_2.png',

        video_flow_4: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/video_flow_3.png',

        video_flow_5: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/video_flow_4.png',

        video_flow_6: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/video_flow_5.png',

        video_flow_7: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/video_flow_6.png',

        video_flow_8: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/video_flow_7.png',

        registration_of_trade_mark_flow_0: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/registration_of_trade_mark_flow_0.png',

        registration_of_trade_mark_flow_1: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/registration_of_trade_mark_flow_0.png',

        registration_of_trade_mark_flow_2: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/registration_of_trade_mark_flow_1.png',

        registration_of_trade_mark_flow_3: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/registration_of_trade_mark_flow_1.png',

        registration_of_trade_mark_flow_4: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/registration_of_trade_mark_flow_4.png',

        registration_of_trade_mark_flow_5: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/registration_of_trade_mark_flow_5.png',

        registration_of_trade_mark_flow_6: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/registration_of_trade_mark_flow_6.png',

        demand01: 'https://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/demand-01.png',

        demand02: 'https://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/demand-02.png',

        demand03: 'https://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/demand-03.png',

        demand04: 'https://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/demand-04.png',

        demand05: 'https://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/demand-05.png',

        demand06: 'https://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/demand-06.png',

        demand07: 'https://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/demand-07.png',

        demand08: 'https://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/demand-08.png',

        demand09: 'https://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/demand-09.png',

        demand10: 'https://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/demand-10.png',

        avtor: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/avtor.png',

        edit: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/edit.png',

        obligation: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/obligation.png',

        refund: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/refund.png',

        userto: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/to.png',

        underway: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/underway.png',

        unevaluated: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/unevaluated.png',

        shadowBg: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/shadow-bg.png',

        couponBg: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/coupon.png',

        couponBanner: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/banner.png',

        infoCancel: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/cancel.png',

        infoCompany: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/company.png',

        infoEmail: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/email.png',

        infoPhone: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/phone-bg.png',

        infoSelected: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/selected.png',

        infoUnselected: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/unselected.png',

        blueball: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/blueball.png',

        phone: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/phone.png',

        publishBg: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/publish-bg.png',

        templateDownload: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/template_download.png',

        noDownload: 'https://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/no-download.png',

        zanNo: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/zan-no.png',

        zanYes: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/zan-yes.png',

        banner: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/aa.png',

        card: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/card.png',

        folding: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/folding.png',

        page: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/navigation/page.png'
    },

    process: {
        consult: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/process/consult.png',

        deliver: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/process/deliver.png',

        design: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/process/design.png',

        finish: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/process/finish.png',

        order: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/process/order.png',

        confirm: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/process/confirm.png',

        sign: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/process/sign.png',

        submit: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/process/submit.png',

        receipt: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/process/receipt.png',

        search: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/process/search.png',

        publicity: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/process/publicity.png',

        certificate: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/process/certificate.png'
    },

    product: {
        album: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/product/album.png',

        card: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/product/card.png',

        uncheckedMine: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/mine-unchecked.png',

        consult: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/consult.png',

        consultUn: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/consult-un.png',

        free: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/free.png',

        freeUn: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/free-un.png',

        index: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/index.png',

        indexUn: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/index-un.png',

        user: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/user.png',

        userUn: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/user-un.png',

        service: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/service.png',

        folding: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/product/folding.png',

        logo: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/product/logo.png',

        page: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/product/page.png',

        poster: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/product/poster.png'
    },

    promise: {
        free: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/promise/free.png',

        original: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/promise/original.png',

        refund: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/promise/refund.png',

        satisfied: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/promise/satisfied.png',

        time: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/promise/time.png',

        transparent: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/promise/transparent.png'
    },

    record: {
        2013: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/record/2013.jpg',

        2015: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/record/2015.jpg',

        2016: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/record/2016.jpg',

        2017: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/record/2017.jpg'
    },

    footer: {
        checkedHomePage: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/home-page-checked.png',

        uncheckedHomePage: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/home-page-unchecked.png',

        checkedOrder: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/order-checked.png',

        uncheckedOrder: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/order-unchecked.png',

        bang: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/bang.png',

        checkedMine: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/mine-checked.png',

        uncheckedMine: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/mine-unchecked.png',

        consult: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/consult.png',

        consultUn: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/consult-un.png',

        free: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/free.png',

        freeUn: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/free-un.png',

        index: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/index.png',

        indexUn: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/index-un.png',

        user: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/user.png',

        userUn: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/user-un.png',

        service: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/footer/service.png'
    },

    qrCode: {
        customService: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/qrCode/custom-service.png',

        background: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/qrCode/background.png',

        newQrCode: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/qrCode/new-qr-code.png'
    },

    status: {
        fail: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/status/fail.jpg'
    },

    detail: {
        album: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/detail/album.jpg',

        card: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/detail/card.jpg',

        folding: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/detail/folding.jpg',

        logo: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/detail/logo.jpg',

        page: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/detail/page.jpg',

        poster: 'http://qcbangvipyidiancom.oss-cn-beijing.aliyuncs.com/detail/poster.jpg'
    }
};

var cacheName = {
    coupon: {
        couponList: 'couponList',
        userCoupon: 'userCouponList'
    },

    typeGroup: {
        groupList: 'groupList'
    },

    type: {
        typeList: 'typeList'
    },

    designer: {
        designerList: 'designerList'
    },

    serviceFlow: {
        serviceFlowList: 'serviceFlowList'
    },

    detail: {
        detailList: 'detailList'
    },

    discount: {
        discountList: 'discountList'
    },

    client: {
        customers: 'customersList'
    },

    case: {
        caseList: 'caseList',

        masterpieceList: 'masterpieceList',

        masterpieceLikeList: 'masterpieceLikeList',

        caseLikeList: 'caseLikeList'
    },

    professional: {
        professionObject: 'professionObject'
    },

    adviser: {
        adviserInfo: 'adviserInfoList'
    },
    user: {
        userinfo: 'userinfoList'
    },

    freeTemplate: {
        template: 'templateList',
        industry: 'indutryList',
        likeList: 'likeList',
        downloadList: 'downloadList'
    },

    order: {
        orderList: 'orderList',
        orderDeatil: 'orderDetail',
        difference: 'differenceList'
    }
};

var statusInfo = {
    '0': '待支付',
    '1': '已支付',
    '2': '进⾏中',
    '3': '已完成',
    '4': '已取消'
};

var handleStatusInfo = [{
    '0': '未处理',
    '1': '客服需求确认',
    '2': '客服需求修改',
    '3': '客户需求确认',
    '4': '进行设计',
    '5': '提供初稿',
    '6': '修改稿件',
    '7': '设计定稿',
    '8': '发源文件'
}, {
    '0': '未处理',
    '1': '客服需求确认',
    '2': '客服需求修改',
    '3': '客户需求确认',
    '4': '影片执行',
    '5': '视频初稿',
    '6': '视频修正',
    '7': '视频定稿',
    '8': '视频成品'
}, {
    '0': '未处理',
    '1': '客服商标确认',
    '2': '客服需求修改',
    '3': '客户商标确认',
    '4': '递交申请',
    '5': '已递交',
    '6': '已受理'
}];

var noticeInfo = {
    'design_flow_0': '24小时内客服会跟您确认设计需求；',
    'design_flow_1': '如设计需求不符，请联系客服为您修改',
    'design_flow_2': '如设计需求不符，请联系客服为您修改',
    'design_flow_3': '如设计需求不符，请联系客服为您修改',
    'design_flow_4': '设计师在加紧设计中，如有疑问，请联系客服',
    'design_flow_5': '请勾选您满意的设计，点击下方“满意定稿”，如不满意点击下方“不满意”，客服会与您联系；',
    'design_flow_6': '如您对稿件满意，请点击下方“满意定稿”，如不满意请联系客服；',
    'video_flow_1': '如需求不符，请联系客服为您修改',
    'video_flow_2': '如需求不符，请联系客服为您修改',
    'video_flow_3': '如需求不符，请联系客服为您修改',
    'video_flow_4': '设计师在加紧设计中，如有疑问，请联系客服',
    'video_flow_5': '请勾选您满意的设计，点击下方“满意定稿”，如不满意点击下方“不满意”，客服会与您联系；',
    'video_flow_6': '如您对稿件满意，请点击下方“满意定稿”，如不满意请联系客服；',
    'registration_of_trade_mark_flow_0': '24小时内客服会跟您确认商标注册信息',
    'registration_of_trade_mark_flow_1': '24小时内客服会跟您确认商标注册信息',
    'registration_of_trade_mark_flow_2': '24小时内客服会跟您确认商标注册信息',
    'registration_of_trade_mark_flow_3': '24小时内客服会跟您确认商标注册信息',
    'registration_of_trade_mark_flow_4': '客服人员会尽快帮您递交商标注册申请，请耐心等候',
    'registration_of_trade_mark_flow_5': '商标已递交至商标局，下发回执时间较长请耐心等待',
    'registration_of_trade_mark_flow_6': '商标注册已进入盲查阶段，收到回执您即可打TM标使用商标'
};

var refundStatusInfo = {
    '1': '申请退款',
    '2': '审核通过',
    '3': '审核不通过',
    '4': '完成打款'
};

var isIphoneX = {
    isIphoneX: false
};

var baseUrl = isDebug ? 'http://120.27.135.162/qcbang-rest' : 'http://qcbang.hz.taeapp.com';

var userInfo = {
    corpId: '',

    userid: '',

    dingId: '',

    name: ''
};

// exports.modal = modal;
// exports.animation = animation;
// exports.isDebug = isDebug;
exports.imageUrls = imageUrls;
exports.cacheName = cacheName;
// exports.domModule = domModule;
// exports.stream = stream;
exports.statusInfo = statusInfo;
exports.handleStatusInfo = handleStatusInfo;
exports.noticeInfo = noticeInfo;
exports.refundStatusInfo = refundStatusInfo;
exports.baseUrl = baseUrl;
exports.userInfo = userInfo;
exports.isIphoneX = isIphoneX;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyY19saWIvY29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVNb2R1bGUiLCJxdWVyeXN0cmluZyIsInVybCIsImVudiIsImFuaW1hdGlvbiIsInN0cmVhbSIsImRvbU1vZHVsZSIsIm1vZGFsIiwiaXNEZWJ1ZyIsImltYWdlVXJscyIsImJhbm5lciIsIm9mZmljaWFsUGFydG5lciIsInJlc3BvbnNlIiwicmVzcG9uc2VBY3RpdmUiLCJjb3Vwb24iLCJicmFuZENhc2UiLCJsb2dvIiwiYWxidW0iLCJjYXJkIiwicG9zdGVyIiwiZm9sZGluZyIsInBhZ2UiLCJyZWNvcmQiLCJiYW5uZXJPbmUiLCJhY3RpdmVCYW5uZXIiLCJuZXdBY3RpdmVCYW5uZXIiLCJhY3RpdmVCYW5uZXIxIiwiYWN0aXZlQmFubmVyMiIsImFjdGl2ZUJhbm5lcjMiLCJhY3RpdmVCYW5uZXI0IiwiYWN0aXZlQmFubmVyNSIsInVuYWJsZTAzIiwidW5hYmxlMDQiLCJ1bmFibGUwNSIsImNhc2UiLCJzZW5pb3JMZWZ0Iiwic2VuaW9yUmlnaHQiLCJkaXJlY3RvckxlZnQiLCJkaXJlY3RvclJpZ2h0IiwiZXhwZXJ0TGVmdCIsImV4cGVydFJpZ2h0IiwicHJpbnRTcGVjaWZpY2F0aW9uIiwicHJpbnRSZWZlcmVuY2UiLCJwcmludEl0ZW0iLCJwcmludEE0VHdvIiwicHJpbnRBNVR3byIsInByaW50QTNUd28iLCJwcmludEE0VGhyZWUiLCJwcmludEEzVGhyZWUiLCJwcmludEEzRm91ciIsInByaW50SXRlbVRvcCIsInByaW50SXRlbUJvdHRvbSIsIm5hdmlnYXRpb24iLCJmb2xkZXIiLCJhcnJvd0JsdWUiLCJjbG9zZUJ1dHRvbiIsImNvbnN1bHRCdG4iLCJiYW5nQnV0dG9uIiwiYnJhbmQiLCJyaWdodCIsInNlcnZpY2VzIiwic3RhciIsIm1pbnVzIiwiYWRkIiwidGl0bGUiLCJsaWtlIiwidW5MaWtlIiwiY3VzdG9tU2VydmljZSIsImN1c3RvbVNlcnZpY2VJbmZvIiwidHJhY2siLCJwcmFpc2UiLCJwcmV2aWV3IiwiYmFja2dyb3VuZCIsImlkZWEiLCJwcm9qZWN0aW9uIiwic2VuaW9yRGVzaWduZXIiLCJkaXJlY3RvckRlc2lnbmVyIiwiZXhwZXJ0RGVzaWduZXIiLCJzZW5pb3JBZHZpc2VyIiwibW90aW9uRGVzaWduZXIiLCJuZXdTdGFyIiwiY29uc3VsdFN1c3BlbmQiLCJkaXNjb3VudE51bSIsInJpZ2h0QXJyb3ciLCJibHVlTmF2IiwidG9wIiwiZGlzY291bnQiLCJjYW5jZWwiLCJsb2FkaW5nIiwiZmlsbGVkUmFkaW8iLCJ1bmZpbGxlZFJhZGlvIiwic3VibWl0QnRuIiwiZGlzU3VibWl0QnRuIiwiZmlsZUljb24iLCJyZWZ1bmRfMSIsInJlZnVuZF8yIiwicmVmdW5kXzQiLCJ3YWl0aW5nIiwiYnRuQmciLCJub09yZGVyIiwidHJpYW5nbGUiLCJ0byIsImJsdWVQaG9uZSIsImRvd25sb2FkIiwiZW5zdXJlIiwic2F0aXNmeSIsInVuc2F0aXNmeSIsInNvdXJjZSIsIndyYXBwZXIiLCJzdGFyU2VsZWN0ZWQiLCJzdGFyVW5zZWxlY3RlZCIsImRlc2lnbmVyQmciLCJkZXNpZ25fZmxvd18wIiwiZGVzaWduX2Zsb3dfMSIsImRlc2lnbl9mbG93XzIiLCJkZXNpZ25fZmxvd18zIiwiZGVzaWduX2Zsb3dfNCIsImRlc2lnbl9mbG93XzUiLCJkZXNpZ25fZmxvd182IiwiZGVzaWduX2Zsb3dfNyIsImRlc2lnbl9mbG93XzgiLCJ2aWRlb19mbG93XzAiLCJ2aWRlb19mbG93XzEiLCJ2aWRlb19mbG93XzIiLCJ2aWRlb19mbG93XzMiLCJ2aWRlb19mbG93XzQiLCJ2aWRlb19mbG93XzUiLCJ2aWRlb19mbG93XzYiLCJ2aWRlb19mbG93XzciLCJ2aWRlb19mbG93XzgiLCJyZWdpc3RyYXRpb25fb2ZfdHJhZGVfbWFya19mbG93XzAiLCJyZWdpc3RyYXRpb25fb2ZfdHJhZGVfbWFya19mbG93XzEiLCJyZWdpc3RyYXRpb25fb2ZfdHJhZGVfbWFya19mbG93XzIiLCJyZWdpc3RyYXRpb25fb2ZfdHJhZGVfbWFya19mbG93XzMiLCJyZWdpc3RyYXRpb25fb2ZfdHJhZGVfbWFya19mbG93XzQiLCJyZWdpc3RyYXRpb25fb2ZfdHJhZGVfbWFya19mbG93XzUiLCJyZWdpc3RyYXRpb25fb2ZfdHJhZGVfbWFya19mbG93XzYiLCJkZW1hbmQwMSIsImRlbWFuZDAyIiwiZGVtYW5kMDMiLCJkZW1hbmQwNCIsImRlbWFuZDA1IiwiZGVtYW5kMDYiLCJkZW1hbmQwNyIsImRlbWFuZDA4IiwiZGVtYW5kMDkiLCJkZW1hbmQxMCIsImF2dG9yIiwiZWRpdCIsIm9ibGlnYXRpb24iLCJyZWZ1bmQiLCJ1c2VydG8iLCJ1bmRlcndheSIsInVuZXZhbHVhdGVkIiwic2hhZG93QmciLCJjb3Vwb25CZyIsImNvdXBvbkJhbm5lciIsImluZm9DYW5jZWwiLCJpbmZvQ29tcGFueSIsImluZm9FbWFpbCIsImluZm9QaG9uZSIsImluZm9TZWxlY3RlZCIsImluZm9VbnNlbGVjdGVkIiwiYmx1ZWJhbGwiLCJwaG9uZSIsInB1Ymxpc2hCZyIsInRlbXBsYXRlRG93bmxvYWQiLCJub0Rvd25sb2FkIiwiemFuTm8iLCJ6YW5ZZXMiLCJwcm9jZXNzIiwiY29uc3VsdCIsImRlbGl2ZXIiLCJkZXNpZ24iLCJmaW5pc2giLCJvcmRlciIsImNvbmZpcm0iLCJzaWduIiwic3VibWl0IiwicmVjZWlwdCIsInNlYXJjaCIsInB1YmxpY2l0eSIsImNlcnRpZmljYXRlIiwicHJvZHVjdCIsInVuY2hlY2tlZE1pbmUiLCJjb25zdWx0VW4iLCJmcmVlIiwiZnJlZVVuIiwiaW5kZXgiLCJpbmRleFVuIiwidXNlciIsInVzZXJVbiIsInNlcnZpY2UiLCJwcm9taXNlIiwib3JpZ2luYWwiLCJzYXRpc2ZpZWQiLCJ0aW1lIiwidHJhbnNwYXJlbnQiLCJmb290ZXIiLCJjaGVja2VkSG9tZVBhZ2UiLCJ1bmNoZWNrZWRIb21lUGFnZSIsImNoZWNrZWRPcmRlciIsInVuY2hlY2tlZE9yZGVyIiwiYmFuZyIsImNoZWNrZWRNaW5lIiwicXJDb2RlIiwibmV3UXJDb2RlIiwic3RhdHVzIiwiZmFpbCIsImRldGFpbCIsImNhY2hlTmFtZSIsImNvdXBvbkxpc3QiLCJ1c2VyQ291cG9uIiwidHlwZUdyb3VwIiwiZ3JvdXBMaXN0IiwidHlwZSIsInR5cGVMaXN0IiwiZGVzaWduZXIiLCJkZXNpZ25lckxpc3QiLCJzZXJ2aWNlRmxvdyIsInNlcnZpY2VGbG93TGlzdCIsImRldGFpbExpc3QiLCJkaXNjb3VudExpc3QiLCJjbGllbnQiLCJjdXN0b21lcnMiLCJjYXNlTGlzdCIsIm1hc3RlcnBpZWNlTGlzdCIsIm1hc3RlcnBpZWNlTGlrZUxpc3QiLCJjYXNlTGlrZUxpc3QiLCJwcm9mZXNzaW9uYWwiLCJwcm9mZXNzaW9uT2JqZWN0IiwiYWR2aXNlciIsImFkdmlzZXJJbmZvIiwidXNlcmluZm8iLCJmcmVlVGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsImluZHVzdHJ5IiwibGlrZUxpc3QiLCJkb3dubG9hZExpc3QiLCJvcmRlckxpc3QiLCJvcmRlckRlYXRpbCIsImRpZmZlcmVuY2UiLCJzdGF0dXNJbmZvIiwiaGFuZGxlU3RhdHVzSW5mbyIsIm5vdGljZUluZm8iLCJyZWZ1bmRTdGF0dXNJbmZvIiwiaXNJcGhvbmVYIiwiYmFzZVVybCIsInVzZXJJbmZvIiwiY29ycElkIiwidXNlcmlkIiwiZGluZ0lkIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVNBOzs7Ozs7SUFHRUEsYSxpQ0FBQUEsYTtJQUNBQyxXLGlDQUFBQSxXO0lBQ0FDLEcsaUNBQUFBLEc7SUFDQUMsRyxpQ0FBQUEsRzs7O0FBR0YsSUFBTUMsWUFBWUosY0FBYyxXQUFkLENBQWxCO0FBQ0EsSUFBTUssU0FBU0wsY0FBYyxRQUFkLENBQWY7QUFDQSxJQUFNTSxZQUFZTixjQUFjLEtBQWQsQ0FBbEI7QUFDQSxJQUFNTyxRQUFRUCxjQUFjLE9BQWQsQ0FBZDtBQUNBLElBQU1RLFVBQVUsS0FBaEI7O0FBS0EsSUFBTUMsWUFBWTtBQUVoQkMsWUFBUTtBQUVOQyx5QkFBaUIsbUZBRlg7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QVRDO0FBVWpCLG9CQUFnQixpQkFWQztBQVdqQixvQkFBZ0Isc0JBWEM7QUFZakIsb0JBQWdCLDZDQVpDO0FBYWpCLG9CQUFnQixnQ0FiQztBQWNqQix5Q0FBcUMsb0JBZHBCO0FBZWpCLHlDQUFxQyxvQkFmcEI7QUFnQmpCLHlDQUFxQyxvQkFoQnBCO0FBaUJqQix5Q0FBcUMsb0JBakJwQjtBQWtCakIseUNBQXFDLHlCQWxCcEI7QUFtQmpCLHlDQUFxQyx5QkFuQnBCO0FBb0JqQix5Q0FBcUM7QUFwQnBCLENBQW5COztBQXVCQSxJQUFNQyxtQkFBbUI7QUFDdkIsU0FBSyxNQURrQjtBQUV2QixTQUFLLE1BRmtCO0FBR3ZCLFNBQUssT0FIa0I7QUFJdkIsU0FBSztBQUprQixDQUF6Qjs7QUFRQSxJQUFJQyxZQUFZO0FBQ2RBLGVBQVc7QUFERyxDQUFoQjs7QUFPQSxJQUFNQyxVQUFVL08sVUFBVSxtQ0FBVixHQUFnRCw2QkFBaEU7O0FBS0EsSUFBSWdQLFdBQVc7QUFFYkMsWUFBUSxFQUZLOztBQUtiQyxZQUFRLEVBTEs7O0FBUWJDLFlBQVEsRUFSSzs7QUFXYkMsVUFBTTtBQVhPLENBQWY7O1FBZUV6UCxHLEdBQUFBLEc7UUFDQUksSyxHQUFBQSxLO1FBQ0FILFMsR0FBQUEsUztRQUNBSSxPLEdBQUFBLE87UUFDQUMsUyxHQUFBQSxTO1FBQ0F5TSxTLEdBQUFBLFM7UUFDQTVNLFMsR0FBQUEsUztRQUNBRCxNLEdBQUFBLE07UUFDQTZPLFUsR0FBQUEsVTtRQUNBQyxnQixHQUFBQSxnQjtRQUNBQyxVLEdBQUFBLFU7UUFDQUMsZ0IsR0FBQUEsZ0I7UUFDQUUsTyxHQUFBQSxPO1FBQ0FDLFEsR0FBQUEsUTtRQUNBRixTLEdBQUFBLFMiLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXHJcbiAqIENvbnN0YW50cyBKU1xyXG4gKlxyXG4gKiDlrprkuYnns7vnu5/luLjph49cclxuICpcclxuICogQGF1dGhvciBnbFxyXG4gKiBAdmVyc2lvbiAxLjAuMCAyMDE3MDkyOFxyXG4gKi9cclxuXHJcbmltcG9ydCBqb3VybmV5IGZyb20gJ3dlZXgtZGluZ3RhbGstam91cm5leSdcclxuXHJcbmNvbnN0IHtcclxuICByZXF1aXJlTW9kdWxlLFxyXG4gIHF1ZXJ5c3RyaW5nLFxyXG4gIHVybCxcclxuICBlbnZcclxufSA9IGpvdXJuZXlcclxuXHJcbmNvbnN0IGFuaW1hdGlvbiA9IHJlcXVpcmVNb2R1bGUoJ2FuaW1hdGlvbicpXHJcbmNvbnN0IHN0cmVhbSA9IHJlcXVpcmVNb2R1bGUoJ3N0cmVhbScpXHJcbmNvbnN0IGRvbU1vZHVsZSA9IHJlcXVpcmVNb2R1bGUoJ2RvbScpXHJcbmNvbnN0IG1vZGFsID0gcmVxdWlyZU1vZHVsZSgnbW9kYWwnKVxyXG5jb25zdCBpc0RlYnVnID0gZmFsc2VcclxuXHJcbi8qKlxyXG4gKiDlm77niYd1cmxcclxuICovXHJcbmNvbnN0IGltYWdlVXJscyA9IHtcclxuICAvKiog5bm/5ZGK5p2hICovXHJcbiAgYmFubmVyOiB7XHJcbiAgICAvKiog55+l5ZCN5ZCI5L2c5ZWGICovXHJcbiAgICBvZmZpY2lhbFBhcnRuZXI6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9iYW5uZXIvb2ZmaWNpYWwtcGFydG5lci5wbmcnLFxyXG5cclxuICAgIC8qKiDlk43lupTljYHkuZ3lpKcgKi9cclxuICAgIHJlc3BvbnNlOiAnaHR0cHM6Ly9kYWxpYW95dW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3FjYmFuZy9iYW5uZXIvMTkuanBnJyxcclxuXHJcbiAgICAvKiog5ZON5bqU5Y2B5Lmd5aSn5rS75YqoICovXHJcbiAgICByZXNwb25zZUFjdGl2ZTogJ2h0dHBzOi8vZGFsaWFveXVuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9xY2JhbmcvYmFubmVyL3Jlcy0xOS5qcGcnLFxyXG5cclxuICAgIC8qKiDkvJjmg6DliLggKi9cclxuICAgIGNvdXBvbjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Jhbm5lci9jb3Vwb24uanBnJyxcclxuXHJcbiAgICAvKiog5ZOB54mM5YWo5qGI5pyN5YqhICovXHJcbiAgICBicmFuZENhc2U6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9iYW5uZXIvYnJhbmQtY2FzZS5qcGcnLFxyXG5cclxuICAgIC8qKiBsb2dv6K6+6K6hICovXHJcbiAgICBsb2dvOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYmFubmVyL2xvZ28uanBnJyxcclxuXHJcbiAgICAvKiog55S75YaM6K6+6K6hICovXHJcbiAgICBhbGJ1bTogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Jhbm5lci9hbGJ1bS5qcGcnLFxyXG5cclxuICAgIC8qKiDlkI3niYforr7orqEgKi9cclxuICAgIGNhcmQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9iYW5uZXIvY2FyZC5qcGcnLFxyXG5cclxuICAgIC8qKiDmtbfmiqXorr7orqEgKi9cclxuICAgIHBvc3RlcjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Jhbm5lci9wb3N0ZXIuanBnJyxcclxuXHJcbiAgICAvKiog5oqY6aG16K6+6K6hICovXHJcbiAgICBmb2xkaW5nOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYmFubmVyL2ZvbGRpbmcucG5nJyxcclxuXHJcbiAgICAvKiog5Y2V6aG16K6+6K6hICovXHJcbiAgICBwYWdlOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYmFubmVyL3BhZ2UucG5nJyxcclxuXHJcbiAgICAvKiog5aSn57qq5LqLICovXHJcbiAgICByZWNvcmQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9iYW5uZXIvcmVjb3JkLmpwZycsXHJcblxyXG4gICAgLyoqIOaWsGJhbm5lcjEgKi9cclxuICAgIGJhbm5lck9uZTogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Jhbm5lci9iYW5uZXItb25lLmpwZycsXHJcblxyXG4gICAgLyoqIOa0u+WKqGJhbm5lciAqL1xyXG4gICAgYWN0aXZlQmFubmVyOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYmFubmVyL2FjdGl2ZS1iYW5uZXIuanBnJyxcclxuXHJcbiAgICAvKiog5paw5rS75YqoYmFubmVyICovXHJcbiAgICBuZXdBY3RpdmVCYW5uZXI6ICdodHRwczovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYmFubmVyL2FjdGl2ZS1iYW5uZXItbmV3LnBuZycsXHJcblxyXG4gICAgLyoqIOa0u+WKqGJhbm5lcjEgKi9cclxuICAgIGFjdGl2ZUJhbm5lcjE6ICdodHRwczovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYmFubmVyL2FjdGl2ZS1iYW5uZXItMDEucG5nJyxcclxuXHJcbiAgICAvKiog5rS75YqoYmFubmVyMiAqL1xyXG4gICAgYWN0aXZlQmFubmVyMjogJ2h0dHBzOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9iYW5uZXIvYWN0aXZlLWJhbm5lci0wMi5wbmcnLFxyXG5cclxuICAgIC8qKiDmtLvliqhiYW5uZXIzICovXHJcbiAgICBhY3RpdmVCYW5uZXIzOiAnaHR0cHM6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Jhbm5lci9hY3RpdmUtYmFubmVyLTAzLnBuZycsXHJcblxyXG4gICAgLyoqIOa0u+WKqGJhbm5lcjQgKi9cclxuICAgIGFjdGl2ZUJhbm5lcjQ6ICdodHRwczovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYmFubmVyL2FjdGl2ZS1iYW5uZXItMDQucG5nJyxcclxuXHJcbiAgICAvKiog5rS75YqoYmFubmVyNSAqL1xyXG4gICAgYWN0aXZlQmFubmVyNTogJ2h0dHBzOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9iYW5uZXIvYWN0aXZlLWJhbm5lci0wNS5wbmcnLFxyXG5cclxuICAgIC8qKiBiYW5uZXIwMSovXHJcbiAgICAnMDEnOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYmFubmVyL2Jhbm5lci0wMS5qcGcnLFxyXG5cclxuICAgIC8qKiBiYW5uZXIwMiovXHJcbiAgICAnMDInOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYmFubmVyL2Jhbm5lci0wMi5qcGcnLFxyXG5cclxuICAgIC8qKiBiYW5uZXIwMyovXHJcbiAgICAnMDMnOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYmFubmVyL2Jhbm5lci0wMy5qcGcnLFxyXG5cclxuICAgIC8qKiBiYW5uZXIwNCovXHJcbiAgICAnMDQnOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYmFubmVyL2Jhbm5lci0wNC5qcGcnLFxyXG5cclxuICAgIC8qKiBiYW5uZXIwNSovXHJcbiAgICAnMDUnOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYmFubmVyL2Jhbm5lci0wNS5qcGcnLFxyXG5cclxuICAgIC8qKiBiYW5uZXIwNiovXHJcbiAgICAnMDYnOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYmFubmVyL2Jhbm5lci0wNi5qcGcnLFxyXG5cclxuICAgIC8qKiBiYW5uZXIwNyovXHJcbiAgICAnMDcnOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vYmFubmVyL2Jhbm5lci0wNy5qcGcnLFxyXG5cclxuICAgIC8qKiDlt7Lpooblj5YwMyAqL1xyXG4gICAgdW5hYmxlMDM6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9iYW5uZXIvdW5hYmxlLWJhbm5lci0wMy5qcGcnLFxyXG5cclxuICAgIC8qKiDlt7Lpooblj5YwNCAqL1xyXG4gICAgdW5hYmxlMDQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9iYW5uZXIvdW5hYmxlLWJhbm5lci0wNC5qcGcnLFxyXG5cclxuICAgIC8qKiDlt7Lpooblj5YwNSAqL1xyXG4gICAgdW5hYmxlMDU6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9iYW5uZXIvdW5hYmxlLWJhbm5lci0wNS5qcGcnXHJcbiAgfSxcclxuXHJcbiAgLyoqIOahiOS+iyAqL1xyXG4gIGNhc2U6IHtcclxuICAgIC8qKiBsb2dvICovXHJcbiAgICBsb2dvOiB7XHJcbiAgICAgIC8qKiDotYTmt7Horr7orqHluIgt5bemICovXHJcbiAgICAgIHNlbmlvckxlZnQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL2xvZ28vc2VuaW9yLWxlZnQucG5nJyxcclxuXHJcbiAgICAgIC8qKiDotYTmt7Horr7orqHluIgt5Y+zICovXHJcbiAgICAgIHNlbmlvclJpZ2h0OiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vY2FzZS9sb2dvL3Nlbmlvci1yaWdodC5wbmcnLFxyXG5cclxuICAgICAgLyoqIOS4k+WutuiuvuiuoeW4iC3lt6YgKi9cclxuICAgICAgZGlyZWN0b3JMZWZ0OiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vY2FzZS9sb2dvL2RpcmVjdG9yLWxlZnQucG5nJyxcclxuXHJcbiAgICAgIC8qKiDkuJPlrrborr7orqHluIgt5Y+zICovXHJcbiAgICAgIGRpcmVjdG9yUmlnaHQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL2xvZ28vZGlyZWN0b3ItcmlnaHQucG5nJyxcclxuXHJcbiAgICAgIC8qKiDmgLvnm5Horr7orqHluIgt5bemICovXHJcbiAgICAgIGV4cGVydExlZnQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL2xvZ28vZXhwZXJ0LWxlZnQucG5nJyxcclxuXHJcbiAgICAgIC8qKiDmgLvnm5Horr7orqHluIgt5Y+zICovXHJcbiAgICAgIGV4cGVydFJpZ2h0OiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vY2FzZS9sb2dvL2V4cGVydC1yaWdodC5wbmcnXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKiDlkI3niYcgKi9cclxuICAgIGNhcmQ6IHtcclxuICAgICAgLyoqIOi1hOa3seiuvuiuoeW4iC3lt6YgKi9cclxuICAgICAgc2VuaW9yTGVmdDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Nhc2UvY2FyZC9zZW5pb3ItbGVmdC5wbmcnLFxyXG5cclxuICAgICAgLyoqIOi1hOa3seiuvuiuoeW4iC3lj7MgKi9cclxuICAgICAgc2VuaW9yUmlnaHQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL2NhcmQvc2VuaW9yLXJpZ2h0LnBuZycsXHJcblxyXG4gICAgICAvKiog5LiT5a626K6+6K6h5biILeW3piAqL1xyXG4gICAgICBkaXJlY3RvckxlZnQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL2NhcmQvZGlyZWN0b3ItbGVmdC5wbmcnLFxyXG5cclxuICAgICAgLyoqIOS4k+WutuiuvuiuoeW4iC3lj7MgKi9cclxuICAgICAgZGlyZWN0b3JSaWdodDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Nhc2UvY2FyZC9kaXJlY3Rvci1yaWdodC5wbmcnLFxyXG5cclxuICAgICAgLyoqIOaAu+ebkeiuvuiuoeW4iC3lt6YgKi9cclxuICAgICAgZXhwZXJ0TGVmdDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Nhc2UvY2FyZC9leHBlcnQtbGVmdC5wbmcnLFxyXG5cclxuICAgICAgLyoqIOaAu+ebkeiuvuiuoeW4iC3lj7MgKi9cclxuICAgICAgZXhwZXJ0UmlnaHQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL2NhcmQvZXhwZXJ0LXJpZ2h0LnBuZydcclxuICAgIH0sXHJcblxyXG4gICAgLyoqIOa1t+aKpSAqL1xyXG4gICAgcG9zdGVyOiB7XHJcbiAgICAgIC8qKiDotYTmt7Horr7orqHluIgt5bemICovXHJcbiAgICAgIHNlbmlvckxlZnQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL3Bvc3Rlci9zZW5pb3ItbGVmdC5qcGcnLFxyXG5cclxuICAgICAgLyoqIOi1hOa3seiuvuiuoeW4iC3lj7MgKi9cclxuICAgICAgc2VuaW9yUmlnaHQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL3Bvc3Rlci9zZW5pb3ItcmlnaHQuanBnJyxcclxuXHJcbiAgICAgIC8qKiDkuJPlrrborr7orqHluIgt5bemICovXHJcbiAgICAgIGRpcmVjdG9yTGVmdDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Nhc2UvcG9zdGVyL2RpcmVjdG9yLWxlZnQuanBnJyxcclxuXHJcbiAgICAgIC8qKiDkuJPlrrborr7orqHluIgt5Y+zICovXHJcbiAgICAgIGRpcmVjdG9yUmlnaHQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL3Bvc3Rlci9kaXJlY3Rvci1yaWdodC5qcGcnLFxyXG5cclxuICAgICAgLyoqIOaAu+ebkeiuvuiuoeW4iC3lt6YgKi9cclxuICAgICAgZXhwZXJ0TGVmdDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Nhc2UvcG9zdGVyL2V4cGVydC1sZWZ0LmpwZycsXHJcblxyXG4gICAgICAvKiog5oC755uR6K6+6K6h5biILeWPsyAqL1xyXG4gICAgICBleHBlcnRSaWdodDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Nhc2UvcG9zdGVyL2V4cGVydC1yaWdodC5qcGcnXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKiDnlLvlhowgKi9cclxuICAgIGFsYnVtOiB7XHJcbiAgICAgIC8qKiDotYTmt7Horr7orqHluIgt5bemICovXHJcbiAgICAgIHNlbmlvckxlZnQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL2FsYnVtL3Nlbmlvci1sZWZ0LnBuZycsXHJcblxyXG4gICAgICAvKiog6LWE5rex6K6+6K6h5biILeWPsyAqL1xyXG4gICAgICBzZW5pb3JSaWdodDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Nhc2UvYWxidW0vc2VuaW9yLXJpZ2h0LnBuZycsXHJcblxyXG4gICAgICAvKiog5LiT5a626K6+6K6h5biILeW3piAqL1xyXG4gICAgICBkaXJlY3RvckxlZnQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL2FsYnVtL2RpcmVjdG9yLWxlZnQucG5nJyxcclxuXHJcbiAgICAgIC8qKiDkuJPlrrborr7orqHluIgt5Y+zICovXHJcbiAgICAgIGRpcmVjdG9yUmlnaHQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL2FsYnVtL2RpcmVjdG9yLXJpZ2h0LnBuZycsXHJcblxyXG4gICAgICAvKiog5oC755uR6K6+6K6h5biILeW3piAqL1xyXG4gICAgICBleHBlcnRMZWZ0OiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vY2FzZS9hbGJ1bS9leHBlcnQtbGVmdC5wbmcnLFxyXG5cclxuICAgICAgLyoqIOaAu+ebkeiuvuiuoeW4iC3lj7MgKi9cclxuICAgICAgZXhwZXJ0UmlnaHQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL2FsYnVtL2V4cGVydC1yaWdodC5wbmcnLFxyXG5cclxuICAgICAgLyoqIOeUu+WGjOaJk+WNsOinhOagvCAqL1xyXG4gICAgICBwcmludFNwZWNpZmljYXRpb246ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL2FsYnVtL3ByaW50U3BlY2lmaWNhdGlvbi5wbmcnLFxyXG5cclxuICAgICAgLyoqIOeUu+WGjOaJk+WNsOWPguiAgyAqL1xyXG4gICAgICBwcmludFJlZmVyZW5jZTogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Nhc2UvYWxidW0vcHJpbnQtcmVmZXJlbmNlLmpwZycsXHJcblxyXG4gICAgICAvKiog55S75YaM5omT5Y2w5a6e5L6LICovXHJcbiAgICAgIHByaW50SXRlbTogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Nhc2UvYWxidW0vcHJpbnQtaXRlbS5qcGcnXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKiDmipjpobUgKi9cclxuICAgIGZvbGRpbmc6IHtcclxuICAgICAgLyoqIOi1hOa3seiuvuiuoeW4iC3lt6YgKi9cclxuICAgICAgc2VuaW9yTGVmdDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Nhc2UvZm9sZGluZy9zZW5pb3ItbGVmdC5wbmcnLFxyXG5cclxuICAgICAgLyoqIOi1hOa3seiuvuiuoeW4iC3lj7MgKi9cclxuICAgICAgc2VuaW9yUmlnaHQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL2ZvbGRpbmcvc2VuaW9yLXJpZ2h0LnBuZycsXHJcblxyXG4gICAgICAvKiog5LiT5a626K6+6K6h5biILeW3piAqL1xyXG4gICAgICBkaXJlY3RvckxlZnQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL2ZvbGRpbmcvZGlyZWN0b3ItbGVmdC5wbmcnLFxyXG5cclxuICAgICAgLyoqIOS4k+WutuiuvuiuoeW4iC3lj7MgKi9cclxuICAgICAgZGlyZWN0b3JSaWdodDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Nhc2UvZm9sZGluZy9kaXJlY3Rvci1yaWdodC5wbmcnLFxyXG5cclxuICAgICAgLyoqIOaAu+ebkeiuvuiuoeW4iC3lt6YgKi9cclxuICAgICAgZXhwZXJ0TGVmdDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Nhc2UvZm9sZGluZy9leHBlcnQtbGVmdC5qcGcnLFxyXG5cclxuICAgICAgLyoqIOaAu+ebkeiuvuiuoeW4iC3lj7MgKi9cclxuICAgICAgZXhwZXJ0UmlnaHQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL2ZvbGRpbmcvZXhwZXJ0LXJpZ2h0LmpwZycsXHJcblxyXG4gICAgICAvKiog5oqY6aG15omT5Y2w6KeE5qC8ICovXHJcbiAgICAgIHByaW50U3BlY2lmaWNhdGlvbjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Nhc2UvZm9sZGluZy9wcmludFNwZWNpZmljYXRpb24ucG5nJyxcclxuXHJcbiAgICAgIC8qKiDmipjpobXmiZPljbDlj4LogIMgKi9cclxuICAgICAgcHJpbnRSZWZlcmVuY2U6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL2ZvbGRpbmcvcHJpbnQtcmVmZXJlbmNlLmpwZycsXHJcblxyXG4gICAgICAvKiog5oqY6aG15omT5Y2wQTTlr7nmipggKi9cclxuICAgICAgcHJpbnRBNFR3bzogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Nhc2UvZm9sZGluZy9wcmludC1BNC0yLmpwZycsXHJcblxyXG4gICAgICAvKiog5oqY6aG15omT5Y2wQTXlr7nmipggKi9cclxuICAgICAgcHJpbnRBNVR3bzogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Nhc2UvZm9sZGluZy9wcmludC1BNS0yLmpwZycsXHJcblxyXG4gICAgICAvKiog5oqY6aG15omT5Y2wQTPlr7nmipggKi9cclxuICAgICAgcHJpbnRBM1R3bzogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Nhc2UvZm9sZGluZy9wcmludC1BMy0yLmpwZycsXHJcblxyXG4gICAgICAvKiog5oqY6aG15omT5Y2wQTTkuInmipggKi9cclxuICAgICAgcHJpbnRBNFRocmVlOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vY2FzZS9mb2xkaW5nL3ByaW50LUE0LTMuanBnJyxcclxuXHJcbiAgICAgIC8qKiDmipjpobXmiZPljbBBM+S4ieaKmCAqL1xyXG4gICAgICBwcmludEEzVGhyZWU6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL2ZvbGRpbmcvcHJpbnQtQTMtMy5qcGcnLFxyXG5cclxuICAgICAgLyoqIOaKmOmhteaJk+WNsEEz5Zub5oqYICovXHJcbiAgICAgIHByaW50QTNGb3VyOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vY2FzZS9mb2xkaW5nL3ByaW50LUEzLTQuanBnJ1xyXG4gICAgfSxcclxuXHJcbiAgICAvKiog5Y2V6aG1ICovXHJcbiAgICBwYWdlOiB7XHJcbiAgICAgIC8qKiDotYTmt7Horr7orqHluIgt5bemICovXHJcbiAgICAgIHNlbmlvckxlZnQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL3BhZ2Uvc2VuaW9yLWxlZnQucG5nJyxcclxuXHJcbiAgICAgIC8qKiDotYTmt7Horr7orqHluIgt5Y+zICovXHJcbiAgICAgIHNlbmlvclJpZ2h0OiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vY2FzZS9wYWdlL3Nlbmlvci1yaWdodC5wbmcnLFxyXG5cclxuICAgICAgLyoqIOS4k+WutuiuvuiuoeW4iC3lt6YgKi9cclxuICAgICAgZGlyZWN0b3JMZWZ0OiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vY2FzZS9wYWdlL2RpcmVjdG9yLWxlZnQucG5nJyxcclxuXHJcbiAgICAgIC8qKiDkuJPlrrborr7orqHluIgt5Y+zICovXHJcbiAgICAgIGRpcmVjdG9yUmlnaHQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL3BhZ2UvZGlyZWN0b3ItcmlnaHQucG5nJyxcclxuXHJcbiAgICAgIC8qKiDmgLvnm5Horr7orqHluIgt5bemICovXHJcbiAgICAgIGV4cGVydExlZnQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL3BhZ2UvZXhwZXJ0LWxlZnQucG5nJyxcclxuXHJcbiAgICAgIC8qKiDmgLvnm5Horr7orqHluIgt5Y+zICovXHJcbiAgICAgIGV4cGVydFJpZ2h0OiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vY2FzZS9wYWdlL2V4cGVydC1yaWdodC5wbmcnLFxyXG5cclxuICAgICAgLyoqIOWNlemhteaJk+WNsOinhOagvCAqL1xyXG4gICAgICBwcmludFNwZWNpZmljYXRpb246ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL3BhZ2UvcHJpbnRTcGVjaWZpY2F0aW9uLnBuZycsXHJcblxyXG4gICAgICAvKiog5Y2V6aG15omT5Y2w5Y+C6ICDICovXHJcbiAgICAgIHByaW50UmVmZXJlbmNlOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vY2FzZS9wYWdlL3ByaW50LXJlZmVyZW5jZS5qcGcnLFxyXG5cclxuICAgICAgLyoqIOWNlemhteaJk+WNsOWunuS+iy3kuIogKi9cclxuICAgICAgcHJpbnRJdGVtVG9wOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vY2FzZS9wYWdlL3ByaW50LWl0ZW0tdG9wLmpwZycsXHJcblxyXG4gICAgICAvKiog5Y2V6aG15omT5Y2w5a6e5L6LLeS4iyAqL1xyXG4gICAgICBwcmludEl0ZW1Cb3R0b206ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9jYXNlL3BhZ2UvcHJpbnQtaXRlbS1ib3R0b20uanBnJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKiDlr7zoiKogKi9cclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAvKiog5paH5Lu25aS5ICovXHJcbiAgICBmb2xkZXI6ICdodHRwczovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9mb2xkZXIucG5nJyxcclxuXHJcbiAgICAvKiog57u/6Imy5Y+z566t5aS0ICovXHJcbiAgICBhcnJvd0JsdWU6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2Fycm93LWJsdWUucG5nJyxcclxuXHJcbiAgICAvKiog5YWz6Zet5oyJ6ZKuICovXHJcbiAgICBjbG9zZUJ1dHRvbjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vY2xvc2UtYnV0dG9uLnBuZycsXHJcblxyXG4gICAgLyoqIOa0u+WKqOWSqOivouaMiemSriAqL1xyXG4gICAgY29uc3VsdEJ0bjogJ2h0dHBzOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2NvbnN1bHQtYnRuLnBuZycsXHJcblxyXG4gICAgLyoqIOWRvOWPq+WuouacjeaMiemSriAqL1xyXG4gICAgYmFuZ0J1dHRvbjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vYmFuZy1idXR0b24ucG5nJyxcclxuXHJcbiAgICAvKiog5ZOB54mM5YWo5qGI5pyN5YqhICovXHJcbiAgICBicmFuZDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vYnJhbmQucG5nJyxcclxuXHJcbiAgICAvKiog5Y+z5L6nICovXHJcbiAgICByaWdodDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vcmlnaHQuanBnJyxcclxuXHJcbiAgICAvKiog5Li65oKo5om/6K+6ICovXHJcbiAgICBzZXJ2aWNlczogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vc2VydmljZXMucG5nJyxcclxuXHJcbiAgICAvKiog6K+E5Lu35pifICovXHJcbiAgICBzdGFyOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9zdGFyLnBuZycsXHJcblxyXG4gICAgLyoqIOWHj+WPtyAqL1xyXG4gICAgbWludXM6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL21pbnVzLnBuZycsXHJcblxyXG4gICAgLyoqIOWKoOWPtyAqL1xyXG4gICAgYWRkOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9hZGQucG5nJyxcclxuXHJcbiAgICAvKiog5qCH6aKYICovXHJcbiAgICB0aXRsZTogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vdGl0bGUucG5nJyxcclxuXHJcbiAgICAvKiog5Zac5qyiICovXHJcbiAgICBsaWtlOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9mdWxsZWQtbGlrZS5wbmcnLFxyXG5cclxuICAgIC8qKiDkuI3llpzmrKIgKi9cclxuICAgIHVuTGlrZTogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vdW5mdWxsZWQtbGlrZS5wbmcnLFxyXG5cclxuICAgIC8qKiDlrqLmnI10aXRsZSAqL1xyXG4gICAgY3VzdG9tU2VydmljZTogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vY3VzdG9tLXNlcnZpY2UucG5nJyxcclxuXHJcbiAgICAvKiog5a6i5pyN5L+h5oGvICovXHJcbiAgICBjdXN0b21TZXJ2aWNlSW5mbzogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vY3VzdG9tLXNlcnZpY2UtaW5mby5wbmcnLFxyXG5cclxuICAgIC8qKiDovajpgZMgKi9cclxuICAgIHRyYWNrOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi90cmFjay5wbmcnLFxyXG5cclxuICAgIC8qKiDotZ4gKi9cclxuICAgIHByYWlzZTogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vcHJhaXNlLnBuZycsXHJcblxyXG4gICAgLyoqIOa1j+iniCAqL1xyXG4gICAgcHJldmlldzogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vcHJldmlldy5wbmcnLFxyXG5cclxuICAgIC8qKiDog4zmma8gKi9cclxuICAgIGJhY2tncm91bmQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2JhY2tncm91bmQucG5nJyxcclxuXHJcbiAgICAvKiog55CG5b+1ICovXHJcbiAgICBpZGVhOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9pZGVhLnBuZycsXHJcblxyXG4gICAgLyoqIOaKleW9sSAqL1xyXG4gICAgcHJvamVjdGlvbjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vcHJvamVjdGlvbi5wbmcnLFxyXG5cclxuICAgIC8qKiDotYTmt7Horr7orqHluIggKi9cclxuICAgIHNlbmlvckRlc2lnbmVyOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9zZW5pb3IucG5nJyxcclxuXHJcbiAgICAvKiog5oC755uR6K6+6K6h5biIICovXHJcbiAgICBkaXJlY3RvckRlc2lnbmVyOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9kaXJlY3Rvci5wbmcnLFxyXG5cclxuICAgIC8qKiDkuJPlrrborr7orqHluIggKi9cclxuICAgIGV4cGVydERlc2lnbmVyOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9leHBlcnQucG5nJyxcclxuXHJcbiAgICAvKiog6LWE5rex6aG+6ZeuICovXHJcbiAgICBzZW5pb3JBZHZpc2VyOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9zZW5pb3ItYWR2aXNlci5wbmcnLFxyXG5cclxuICAgIC8qKiDliqjnlLvorr7orqHluIggKi9cclxuICAgIG1vdGlvbkRlc2lnbmVyOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9tb3Rpb24tZGVzaWduZXIucG5nJyxcclxuXHJcbiAgICAvKiog5paw54mI5pif5pifICovXHJcbiAgICBuZXdTdGFyOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9uZXctc3Rhci5wbmcnLFxyXG5cclxuICAgIC8qKiDmgqzmta7lkqjor6LmjInpkq4gKi9cclxuICAgIGNvbnN1bHRTdXNwZW5kOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9jb25zdWx0LXN1c3BlbmQucG5nJyxcclxuXHJcbiAgICAvKiog6ZmQ6LSt5pWw6YePICovXHJcbiAgICBkaXNjb3VudE51bTogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vZGlzY291bnROdW0ucG5nJyxcclxuXHJcbiAgICAvKiog5Y+z566t5aS0ICovXHJcbiAgICByaWdodEFycm93OiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9yaWdodC1hcnJvdy5wbmcnLFxyXG5cclxuICAgIC8qKiDok53oibLmpK3lnIYgKi9cclxuICAgIGJsdWVOYXY6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2JsdWUtbmF2LnBuZycsXHJcblxyXG4gICAgLyoqIOWktOmhtuadoSAqL1xyXG4gICAgdG9wOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi90b3AucG5nJyxcclxuXHJcbiAgICAvKiog5omT5oqYICovXHJcbiAgICBkaXNjb3VudDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vZGlzY291bnQucG5nJyxcclxuXHJcbiAgICAvKiogTG9nbyAqL1xyXG4gICAgbG9nbzogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vbG9nby5wbmcnLFxyXG5cclxuICAgIC8qKiDlj5bmtoggKi9cclxuICAgIGNhbmNlbDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vY2FuY2VsLnBuZycsXHJcblxyXG4gICAgLyoqIOWKoOi9vSAqL1xyXG4gICAgbG9hZGluZzogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vbG9hZGluZy5naWYnLFxyXG5cclxuICAgIC8qKiDloavlhYVyYWRpbyAqL1xyXG4gICAgZmlsbGVkUmFkaW86ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2ZpbGxlZC1yYWRpby5wbmcnLFxyXG5cclxuICAgIC8qKiDmnKrloavlhYVyYWRpbyAqL1xyXG4gICAgdW5maWxsZWRSYWRpbzogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vdW5maWxsZWQtcmFkaW8ucG5nJyxcclxuXHJcbiAgICAvKiog5o+Q5Lqk5oyJ6ZKuICovXHJcbiAgICBzdWJtaXRCdG46ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL3N1Ym1pdC1idXR0b24ucG5nJyxcclxuXHJcbiAgICAvKiog5LiN5Y+v54K55Ye75o+Q5Lqk5oyJ6ZKuICovXHJcbiAgICBkaXNTdWJtaXRCdG46ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2Rpcy1zdWJtaXQtYnV0dG9uLnBuZycsXHJcbiAgICAvKiog5Yid56i/56i/5Lu25paH5Lu25Zu+5qCHICovXHJcbiAgICBmaWxlSWNvbjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vZmlsZS1pbWcucG5nJyxcclxuICAgIC8qKiDpgIDmrL7mtYHnqIsgKi9cclxuICAgIHJlZnVuZF8xOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9yZWZ1bmRfMS5wbmcnLFxyXG4gICAgLyoqIOmAgOasvua1geeoiyAqL1xyXG4gICAgcmVmdW5kXzI6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL3JlZnVuZF8yLnBuZycsXHJcbiAgICAvKiog6YCA5qy+5rWB56iLICovXHJcbiAgICByZWZ1bmRfNDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vcmVmdW5kXzMucG5nJyxcclxuICAgIC8qKiDpobXpnaLnrYnlvoXkuK0gKi9cclxuICAgIHdhaXRpbmc6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL3dhaXRpbmcucG5nJyxcclxuICAgIC8qKiDml6DorqLljZXml7bnmoTmjInpkq4qL1xyXG4gICAgYnRuQmc6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2J0bi1iZy5wbmcnLFxyXG4gICAgLyoqIOaXoOiuouWNleekuuaEj+WbviovXHJcbiAgICBub09yZGVyOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9uby1vcmRlci5wbmcnLFxyXG4gICAgLyoqIOS4ieinkuW9oiovXHJcbiAgICB0cmlhbmdsZTogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vdHJpYW5nbGUucG5nJyxcclxuICAgIC8qKiDlj7Pnrq3lpLQgKi9cclxuICAgIHRvOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi90by5wbmcnLFxyXG4gICAgLyoqIOiTneiJsueUteivneagh+W/lyAqL1xyXG4gICAgYmx1ZVBob25lOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9ibHVlLXBob25lLnBuZycsXHJcbiAgICAvKiog5LiL6L29ICovXHJcbiAgICBkb3dubG9hZDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vZG93bmxvYWQucG5nJyxcclxuICAgIC8qKiDnoa7orqQgKi9cclxuICAgIGVuc3VyZTogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vZW5zdXJlLnBuZycsXHJcbiAgICAvKiog5ruh5oSPICovXHJcbiAgICBzYXRpc2Z5OiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9zYXRpc2Z5LnBuZycsXHJcbiAgICAvKiog5LiN5ruh5oSPICovXHJcbiAgICB1bnNhdGlzZnk6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL3Vuc2F0aXNmeS5wbmcnLFxyXG4gICAgLyoqIOa6kOaWh+S7tiAqL1xyXG4gICAgc291cmNlOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9zb3VyY2UucG5nJyxcclxuICAgIC8qKiDpmLTlvbHovrnmoYYgKi9cclxuICAgIHdyYXBwZXI6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL3dyYXBwZXIucG5nJyxcclxuICAgIC8qKiDor4Tku7fnmoTmmJ/mmJ/pgInkuK3nirbmgIEgKi9cclxuICAgIHN0YXJTZWxlY3RlZDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vc3Rhci1zZWxlY3RlZC5wbmcnLFxyXG4gICAgLyoqIOivhOS7t+eahOaYn+aYn+acqumAieS4reeKtuaAgSAqL1xyXG4gICAgc3RhclVuc2VsZWN0ZWQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL3N0YXItdW5zZWxlY3RlZC5wbmcnLFxyXG4gICAgLyoqIOiuvuiuoeS/oeaBr+iDjOaZryAqL1xyXG4gICAgZGVzaWduZXJCZzogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vZGVzaWduLWluZm8tYmcucG5nJyxcclxuICAgIC8qKiDorr7orqHnsbvmtYHnqIvlm74gKi9cclxuICAgIGRlc2lnbl9mbG93XzA6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2Rlc2lnbl9mbG93XzAucG5nJyxcclxuICAgIC8qKiDorr7orqHnsbvmtYHnqIvlm74gKi9cclxuICAgIGRlc2lnbl9mbG93XzE6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2Rlc2lnbl9mbG93XzAucG5nJyxcclxuICAgIC8qKiDorr7orqHnsbvmtYHnqIvlm74gKi9cclxuICAgIGRlc2lnbl9mbG93XzI6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2Rlc2lnbl9mbG93XzEucG5nJyxcclxuICAgIC8qKiDorr7orqHnsbvmtYHnqIvlm74gKi9cclxuICAgIGRlc2lnbl9mbG93XzM6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2Rlc2lnbl9mbG93XzIucG5nJyxcclxuICAgIC8qKiDorr7orqHnsbvmtYHnqIvlm74gKi9cclxuICAgIGRlc2lnbl9mbG93XzQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2Rlc2lnbl9mbG93XzMucG5nJyxcclxuICAgIC8qKiDorr7orqHnsbvmtYHnqIvlm74gKi9cclxuICAgIGRlc2lnbl9mbG93XzU6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2Rlc2lnbl9mbG93XzQucG5nJyxcclxuICAgIC8qKiDorr7orqHnsbvmtYHnqIvlm74gKi9cclxuICAgIGRlc2lnbl9mbG93XzY6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2Rlc2lnbl9mbG93XzUucG5nJyxcclxuICAgIC8qKiDorr7orqHnsbvmtYHnqIvlm74gKi9cclxuICAgIGRlc2lnbl9mbG93Xzc6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2Rlc2lnbl9mbG93XzYucG5nJyxcclxuICAgIC8qKiDorr7orqHnsbvmtYHnqIvlm74gKi9cclxuICAgIGRlc2lnbl9mbG93Xzg6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2Rlc2lnbl9mbG93XzcucG5nJyxcclxuICAgIC8qKiDop4bpopHnsbvmtYHnqIvlm74gKi9cclxuICAgIHZpZGVvX2Zsb3dfMDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vdmlkZW9fZmxvd18wLnBuZycsXHJcbiAgICAvKiog6KeG6aKR57G75rWB56iL5Zu+ICovXHJcbiAgICB2aWRlb19mbG93XzE6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL3ZpZGVvX2Zsb3dfMC5wbmcnLFxyXG4gICAgLyoqIOinhumikeexu+a1geeoi+WbviAqL1xyXG4gICAgdmlkZW9fZmxvd18yOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi92aWRlb19mbG93XzEucG5nJyxcclxuICAgIC8qKiDop4bpopHnsbvmtYHnqIvlm74gKi9cclxuICAgIHZpZGVvX2Zsb3dfMzogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vdmlkZW9fZmxvd18yLnBuZycsXHJcbiAgICAvKiog6KeG6aKR57G75rWB56iL5Zu+ICovXHJcbiAgICB2aWRlb19mbG93XzQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL3ZpZGVvX2Zsb3dfMy5wbmcnLFxyXG4gICAgLyoqIOinhumikeexu+a1geeoi+WbviAqL1xyXG4gICAgdmlkZW9fZmxvd181OiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi92aWRlb19mbG93XzQucG5nJyxcclxuICAgIC8qKiDop4bpopHnsbvmtYHnqIvlm74gKi9cclxuICAgIHZpZGVvX2Zsb3dfNjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vdmlkZW9fZmxvd181LnBuZycsXHJcbiAgICAvKiog6KeG6aKR57G75rWB56iL5Zu+ICovXHJcbiAgICB2aWRlb19mbG93Xzc6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL3ZpZGVvX2Zsb3dfNi5wbmcnLFxyXG4gICAgLyoqIOinhumikeexu+a1geeoi+WbviAqL1xyXG4gICAgdmlkZW9fZmxvd184OiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi92aWRlb19mbG93XzcucG5nJyxcclxuICAgIC8qKiDllYbmoIfnsbvmtYHnqIvlm74gKi9cclxuICAgIHJlZ2lzdHJhdGlvbl9vZl90cmFkZV9tYXJrX2Zsb3dfMDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vcmVnaXN0cmF0aW9uX29mX3RyYWRlX21hcmtfZmxvd18wLnBuZycsXHJcbiAgICAvKiog5ZWG5qCH57G75rWB56iL5Zu+ICovXHJcbiAgICByZWdpc3RyYXRpb25fb2ZfdHJhZGVfbWFya19mbG93XzE6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL3JlZ2lzdHJhdGlvbl9vZl90cmFkZV9tYXJrX2Zsb3dfMC5wbmcnLFxyXG4gICAgLyoqIOWVhuagh+exu+a1geeoi+WbviAqL1xyXG4gICAgcmVnaXN0cmF0aW9uX29mX3RyYWRlX21hcmtfZmxvd18yOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9yZWdpc3RyYXRpb25fb2ZfdHJhZGVfbWFya19mbG93XzEucG5nJyxcclxuICAgIC8qKiDllYbmoIfnsbvmtYHnqIvlm74gKi9cclxuICAgIHJlZ2lzdHJhdGlvbl9vZl90cmFkZV9tYXJrX2Zsb3dfMzogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vcmVnaXN0cmF0aW9uX29mX3RyYWRlX21hcmtfZmxvd18xLnBuZycsXHJcbiAgICAvKiog5ZWG5qCH57G75rWB56iL5Zu+ICovXHJcbiAgICByZWdpc3RyYXRpb25fb2ZfdHJhZGVfbWFya19mbG93XzQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL3JlZ2lzdHJhdGlvbl9vZl90cmFkZV9tYXJrX2Zsb3dfNC5wbmcnLFxyXG4gICAgLyoqIOWVhuagh+exu+a1geeoi+WbviAqL1xyXG4gICAgcmVnaXN0cmF0aW9uX29mX3RyYWRlX21hcmtfZmxvd181OiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9yZWdpc3RyYXRpb25fb2ZfdHJhZGVfbWFya19mbG93XzUucG5nJyxcclxuICAgIC8qKiDllYbmoIfnsbvmtYHnqIvlm74gKi9cclxuICAgIHJlZ2lzdHJhdGlvbl9vZl90cmFkZV9tYXJrX2Zsb3dfNjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vcmVnaXN0cmF0aW9uX29mX3RyYWRlX21hcmtfZmxvd182LnBuZycsXHJcbiAgICAvKiog6ZyA5rGC5pyN5YqhMSAqL1xyXG4gICAgZGVtYW5kMDE6ICdodHRwczovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9kZW1hbmQtMDEucG5nJyxcclxuICAgIC8qKiDpnIDmsYLmnI3liqEyICovXHJcbiAgICBkZW1hbmQwMjogJ2h0dHBzOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2RlbWFuZC0wMi5wbmcnLFxyXG4gICAgLyoqIOmcgOaxguacjeWKoTMgKi9cclxuICAgIGRlbWFuZDAzOiAnaHR0cHM6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vZGVtYW5kLTAzLnBuZycsXHJcbiAgICAvKiog6ZyA5rGC5pyN5YqhNCAqL1xyXG4gICAgZGVtYW5kMDQ6ICdodHRwczovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9kZW1hbmQtMDQucG5nJyxcclxuICAgIC8qKiDpnIDmsYLmnI3liqE1ICovXHJcbiAgICBkZW1hbmQwNTogJ2h0dHBzOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2RlbWFuZC0wNS5wbmcnLFxyXG4gICAgLyoqIOmcgOaxguacjeWKoTYgKi9cclxuICAgIGRlbWFuZDA2OiAnaHR0cHM6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vZGVtYW5kLTA2LnBuZycsXHJcbiAgICAvKiog6ZyA5rGC5pyN5YqhNyAqL1xyXG4gICAgZGVtYW5kMDc6ICdodHRwczovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9kZW1hbmQtMDcucG5nJyxcclxuICAgIC8qKiDpnIDmsYLmnI3liqE4ICovXHJcbiAgICBkZW1hbmQwODogJ2h0dHBzOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2RlbWFuZC0wOC5wbmcnLFxyXG4gICAgLyoqIOmcgOaxguacjeWKoTkgKi9cclxuICAgIGRlbWFuZDA5OiAnaHR0cHM6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vZGVtYW5kLTA5LnBuZycsXHJcbiAgICAvKiog6ZyA5rGC5pyN5YqhMTAgKi9cclxuICAgIGRlbWFuZDEwOiAnaHR0cHM6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vZGVtYW5kLTEwLnBuZycsXHJcbiAgICAvKiog6buY6K6k5aS05YOPICovXHJcbiAgICBhdnRvcjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vYXZ0b3IucG5nJyxcclxuICAgIC8qKiDnvJbovpHlm77moIcgKi9cclxuICAgIGVkaXQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2VkaXQucG5nJyxcclxuICAgIC8qKiDlvoXku5jmrL7lm77moIcgKi9cclxuICAgIG9ibGlnYXRpb246ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL29ibGlnYXRpb24ucG5nJyxcclxuICAgIC8qKiDpgIDmrL4gKi9cclxuICAgIHJlZnVuZDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vcmVmdW5kLnBuZycsXHJcbiAgICAvKiog5Y+z566t5aS0ICovXHJcbiAgICB1c2VydG86ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL3RvLnBuZycsXHJcbiAgICAvKiog6L+b6KGM5LitICovXHJcbiAgICB1bmRlcndheTogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vdW5kZXJ3YXkucG5nJyxcclxuICAgIC8qKiDlvoXor4Tku7cgKi9cclxuICAgIHVuZXZhbHVhdGVkOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi91bmV2YWx1YXRlZC5wbmcnLFxyXG4gICAgLyoqIOmYtOW9sei+uSAqL1xyXG4gICAgc2hhZG93Qmc6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL3NoYWRvdy1iZy5wbmcnLFxyXG4gICAgLyoqIOS8mOaDoOWIuOmYtOW9seiDjOaZryAqL1xyXG4gICAgY291cG9uQmc6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2NvdXBvbi5wbmcnLFxyXG4gICAgLyoqIOS8mOaDoOWIuOa0u+WKqOWbviAqL1xyXG4gICAgY291cG9uQmFubmVyOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9iYW5uZXIucG5nJyxcclxuICAgIC8qKiDln7rmnKzkv6Hmga/lj5bmtojmjInpkq4gKi9cclxuICAgIGluZm9DYW5jZWw6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2NhbmNlbC5wbmcnLFxyXG4gICAgLyoqIOWfuuacrOS/oeaBr+WFrOWPuOWQjeensOekuuaEj+WbviovXHJcbiAgICBpbmZvQ29tcGFueTogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vY29tcGFueS5wbmcnLFxyXG4gICAgLyoqIOWfuuacrOS/oeaBr+mCrueuseekuuaEj+WbviAqL1xyXG4gICAgaW5mb0VtYWlsOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9lbWFpbC5wbmcnLFxyXG4gICAgLyoqIOWfuuacrOS/oeaBr+eUteivneekuuaEj+WbviAqL1xyXG4gICAgaW5mb1Bob25lOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9waG9uZS1iZy5wbmcnLFxyXG4gICAgLyoqIOWfuuacrOS/oeaBr+W3sumAieS4reaMiemSriovXHJcbiAgICBpbmZvU2VsZWN0ZWQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL3NlbGVjdGVkLnBuZycsXHJcbiAgICAvKiog5Z+65pys5L+h5oGv5pyq6YCJ5Lit5oyJ6ZKuICovXHJcbiAgICBpbmZvVW5zZWxlY3RlZDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vdW5zZWxlY3RlZC5wbmcnLFxyXG4gICAgLyoqIOagh+mimOiTneeQgyAqL1xyXG4gICAgYmx1ZWJhbGw6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL2JsdWViYWxsLnBuZycsXHJcbiAgICAvKiog6IGU57O75a6i5pyNaWNvbiAqL1xyXG4gICAgcGhvbmU6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL3Bob25lLnBuZycsXHJcbiAgICAvKiog5qCH6aKY6JOd55CDICovXHJcbiAgICBwdWJsaXNoQmc6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL3B1Ymxpc2gtYmcucG5nJyxcclxuICAgIC8qKiDkuIvovb1pY29uICovXHJcbiAgICB0ZW1wbGF0ZURvd25sb2FkOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi90ZW1wbGF0ZV9kb3dubG9hZC5wbmcnLFxyXG4gICAgLyoqIOacquS4i+i9vWljb24gKi9cclxuICAgIG5vRG93bmxvYWQ6ICdodHRwczovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9uby1kb3dubG9hZC5wbmcnLFxyXG4gICAgLyoqIOacqueCuei1nmljb24gKi9cclxuICAgIHphbk5vOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi96YW4tbm8ucG5nJyxcclxuICAgIC8qKiDlt7LngrnotZ5pY29uICovXHJcbiAgICB6YW5ZZXM6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL3phbi15ZXMucG5nJyxcclxuICAgIC8qKiDmqKHmnb/npLrmhI/lm74gKi9cclxuICAgIGJhbm5lcjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vYWEucG5nJyxcclxuICAgIC8qKiDlkI3niYfmqKHmnb9pY29uICovXHJcbiAgICBjYXJkOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vbmF2aWdhdGlvbi9jYXJkLnBuZycsXHJcbiAgICAvKiog5oqY6aG15qih5p2/aWNvbiAqL1xyXG4gICAgZm9sZGluZzogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL25hdmlnYXRpb24vZm9sZGluZy5wbmcnLFxyXG4gICAgLyoqIOWNlemhteaooeadv2ljb24gKi9cclxuICAgIHBhZ2U6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9uYXZpZ2F0aW9uL3BhZ2UucG5nJ1xyXG4gIH0sXHJcblxyXG4gIC8qKiDmnI3liqHmtYHnqIsgKi9cclxuICBwcm9jZXNzOiB7XHJcbiAgICAvKiog5rKf6YCa5ZKo6K+iICovXHJcbiAgICBjb25zdWx0OiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vcHJvY2Vzcy9jb25zdWx0LnBuZycsXHJcblxyXG4gICAgLyoqIOS6pOS7mOa6kOaWh+S7tiAqL1xyXG4gICAgZGVsaXZlcjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3Byb2Nlc3MvZGVsaXZlci5wbmcnLFxyXG5cclxuICAgIC8qKiDorr7orqHkuK0gKi9cclxuICAgIGRlc2lnbjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3Byb2Nlc3MvZGVzaWduLnBuZycsXHJcblxyXG4gICAgLyoqIOWujOaIkOivhOS7tyAqL1xyXG4gICAgZmluaXNoOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vcHJvY2Vzcy9maW5pc2gucG5nJyxcclxuXHJcbiAgICAvKiog5LiL5Y2V5pSv5LuYICovXHJcbiAgICBvcmRlcjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3Byb2Nlc3Mvb3JkZXIucG5nJyxcclxuXHJcbiAgICAvKiog5ZWG5qCH56Gu6K6kICovXHJcbiAgICBjb25maXJtOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vcHJvY2Vzcy9jb25maXJtLnBuZycsXHJcblxyXG4gICAgLyoqIOWnlOaJmOS5puetvuiuoiAqL1xyXG4gICAgc2lnbjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3Byb2Nlc3Mvc2lnbi5wbmcnLFxyXG5cclxuICAgIC8qKiDms6jlhozmj5DkuqQgKi9cclxuICAgIHN1Ym1pdDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3Byb2Nlc3Mvc3VibWl0LnBuZycsXHJcblxyXG4gICAgLyoqIOaUtuWIsOWbnuaJpyAqL1xyXG4gICAgcmVjZWlwdDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3Byb2Nlc3MvcmVjZWlwdC5wbmcnLFxyXG5cclxuICAgIC8qKiDllYbmoIfnm7Lmn6UgKi9cclxuICAgIHNlYXJjaDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3Byb2Nlc3Mvc2VhcmNoLnBuZycsXHJcblxyXG4gICAgLyoqIOWVhuagh+WFrOekuiAqL1xyXG4gICAgcHVibGljaXR5OiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vcHJvY2Vzcy9wdWJsaWNpdHkucG5nJyxcclxuXHJcbiAgICAvKiog5LiL5Y+R6K+B5LmmICovXHJcbiAgICBjZXJ0aWZpY2F0ZTogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3Byb2Nlc3MvY2VydGlmaWNhdGUucG5nJ1xyXG4gIH0sXHJcblxyXG4gIC8qKiDkuqflk4EgKi9cclxuICBwcm9kdWN0OiB7XHJcbiAgICAvKiog55S75YaMICovXHJcbiAgICBhbGJ1bTogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3Byb2R1Y3QvYWxidW0ucG5nJyxcclxuICAgIC8qKiDlkI3niYcgKi9cclxuICAgIGNhcmQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9wcm9kdWN0L2NhcmQucG5nJyxcclxuICAgIC8qKiDmnKrpgInmi6nmiJHnmoQgKi9cclxuICAgIHVuY2hlY2tlZE1pbmU6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9mb290ZXIvbWluZS11bmNoZWNrZWQucG5nJyxcclxuICAgIC8qKiDlkqjor6It6YCJ5LitICovXHJcbiAgICBjb25zdWx0OiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZm9vdGVyL2NvbnN1bHQucG5nJyxcclxuICAgIC8qKiDlkqjor6It5pyq6YCJ5LitICovXHJcbiAgICBjb25zdWx0VW46ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9mb290ZXIvY29uc3VsdC11bi5wbmcnLFxyXG4gICAgLyoqIOWFjei0uS3pgInkuK0gKi9cclxuICAgIGZyZWU6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9mb290ZXIvZnJlZS5wbmcnLFxyXG4gICAgLyoqIOWFjei0uS3mnKrpgInkuK0gKi9cclxuICAgIGZyZWVVbjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Zvb3Rlci9mcmVlLXVuLnBuZycsXHJcbiAgICAvKiog6aaW6aG1LemAieS4rSAqL1xyXG4gICAgaW5kZXg6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9mb290ZXIvaW5kZXgucG5nJyxcclxuICAgIC8qKiDpppbpobUt5pyq6YCJ5LitICovXHJcbiAgICBpbmRleFVuOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZm9vdGVyL2luZGV4LXVuLnBuZycsXHJcbiAgICAvKiog5oiRLemAieS4rSAqL1xyXG4gICAgdXNlcjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Zvb3Rlci91c2VyLnBuZycsXHJcbiAgICAvKiog5oiRLeacqumAieS4rSAqL1xyXG4gICAgdXNlclVuOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZm9vdGVyL3VzZXItdW4ucG5nJyxcclxuICAgIC8qKiDkuJPkuJrmnI3liqEgKi9cclxuICAgIHNlcnZpY2U6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9mb290ZXIvc2VydmljZS5wbmcnLFxyXG5cclxuICAgIC8qKiDmipjpobUgKi9cclxuICAgIGZvbGRpbmc6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9wcm9kdWN0L2ZvbGRpbmcucG5nJyxcclxuXHJcbiAgICAvKiogbG9nbyAqL1xyXG4gICAgbG9nbzogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3Byb2R1Y3QvbG9nby5wbmcnLFxyXG5cclxuICAgIC8qKiDljZXpobUgKi9cclxuICAgIHBhZ2U6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9wcm9kdWN0L3BhZ2UucG5nJyxcclxuXHJcbiAgICAvKiog5rW35oqlICovXHJcbiAgICBwb3N0ZXI6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9wcm9kdWN0L3Bvc3Rlci5wbmcnXHJcbiAgfSxcclxuXHJcbiAgLyoqIOaJv+ivuiAqL1xyXG4gIHByb21pc2U6IHtcclxuICAgIC8qKiDlhajnqIvlhY3otLnmnI3liqEgKi9cclxuICAgIGZyZWU6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9wcm9taXNlL2ZyZWUucG5nJyxcclxuXHJcbiAgICAvKiog5Z2a5oyB5Y6f5Yib6K6+6K6hICovXHJcbiAgICBvcmlnaW5hbDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3Byb21pc2Uvb3JpZ2luYWwucG5nJyxcclxuXHJcbiAgICAvKiog6YCA5qy+5oCl6YCf5aSE55CGICovXHJcbiAgICByZWZ1bmQ6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9wcm9taXNlL3JlZnVuZC5wbmcnLFxyXG5cclxuICAgIC8qKiDnoa7kv53mu6HmhI/kuLrmraIgKi9cclxuICAgIHNhdGlzZmllZDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3Byb21pc2Uvc2F0aXNmaWVkLnBuZycsXHJcblxyXG4gICAgLyoqIOS/neivgeS6pOaQnuaXtumXtCAqL1xyXG4gICAgdGltZTogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3Byb21pc2UvdGltZS5wbmcnLFxyXG5cclxuICAgIC8qKiDorr7orqHov4fnqIvpgI/mmI4gKi9cclxuICAgIHRyYW5zcGFyZW50OiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vcHJvbWlzZS90cmFuc3BhcmVudC5wbmcnXHJcbiAgfSxcclxuXHJcbiAgLyoqIOe6quS6iyAqL1xyXG4gIHJlY29yZDoge1xyXG4gICAgLyoqIDIwMTMgKi9cclxuICAgIDIwMTM6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9yZWNvcmQvMjAxMy5qcGcnLFxyXG5cclxuICAgIC8qKiAyMDE1ICovXHJcbiAgICAyMDE1OiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vcmVjb3JkLzIwMTUuanBnJyxcclxuXHJcbiAgICAvKiogMjAxNiAqL1xyXG4gICAgMjAxNjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL3JlY29yZC8yMDE2LmpwZycsXHJcblxyXG4gICAgLyoqIDIwMTcgKi9cclxuICAgIDIwMTc6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9yZWNvcmQvMjAxNy5qcGcnXHJcbiAgfSxcclxuXHJcbiAgLyoqIOmhteiEmiAqL1xyXG4gIGZvb3Rlcjoge1xyXG4gICAgLyoqIOmAieaLqeS4u+mhtSAqL1xyXG4gICAgY2hlY2tlZEhvbWVQYWdlOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZm9vdGVyL2hvbWUtcGFnZS1jaGVja2VkLnBuZycsXHJcblxyXG4gICAgLyoqIOacqumAieaLqeS4u+mhtSAqL1xyXG4gICAgdW5jaGVja2VkSG9tZVBhZ2U6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9mb290ZXIvaG9tZS1wYWdlLXVuY2hlY2tlZC5wbmcnLFxyXG5cclxuICAgIC8qKiDpgInmi6norqLljZUgKi9cclxuICAgIGNoZWNrZWRPcmRlcjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Zvb3Rlci9vcmRlci1jaGVja2VkLnBuZycsXHJcblxyXG4gICAgLyoqIOacqumAieaLqeiuouWNlSAqL1xyXG4gICAgdW5jaGVja2VkT3JkZXI6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9mb290ZXIvb3JkZXItdW5jaGVja2VkLnBuZycsXHJcblxyXG4gICAgLyoqIGJhbmcgKi9cclxuICAgIGJhbmc6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9mb290ZXIvYmFuZy5wbmcnLFxyXG5cclxuICAgIC8qKiDpgInmi6nmiJHnmoQgKi9cclxuICAgIGNoZWNrZWRNaW5lOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZm9vdGVyL21pbmUtY2hlY2tlZC5wbmcnLFxyXG5cclxuICAgIC8qKiDmnKrpgInmi6nmiJHnmoQgKi9cclxuICAgIHVuY2hlY2tlZE1pbmU6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9mb290ZXIvbWluZS11bmNoZWNrZWQucG5nJyxcclxuXHJcbiAgICAvKiog5ZKo6K+iLemAieS4rSAqL1xyXG4gICAgY29uc3VsdDogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Zvb3Rlci9jb25zdWx0LnBuZycsXHJcbiAgICAvKiog5ZKo6K+iLeacqumAieS4rSAqL1xyXG4gICAgY29uc3VsdFVuOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZm9vdGVyL2NvbnN1bHQtdW4ucG5nJyxcclxuICAgIC8qKiDlhY3otLkt6YCJ5LitICovXHJcbiAgICBmcmVlOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZm9vdGVyL2ZyZWUucG5nJyxcclxuICAgIC8qKiDlhY3otLkt5pyq6YCJ5LitICovXHJcbiAgICBmcmVlVW46ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9mb290ZXIvZnJlZS11bi5wbmcnLFxyXG4gICAgLyoqIOmmlumhtS3pgInkuK0gKi9cclxuICAgIGluZGV4OiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZm9vdGVyL2luZGV4LnBuZycsXHJcbiAgICAvKiog6aaW6aG1LeacqumAieS4rSAqL1xyXG4gICAgaW5kZXhVbjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Zvb3Rlci9pbmRleC11bi5wbmcnLFxyXG4gICAgLyoqIOaIkS3pgInkuK0gKi9cclxuICAgIHVzZXI6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9mb290ZXIvdXNlci5wbmcnLFxyXG4gICAgLyoqIOaIkS3mnKrpgInkuK0gKi9cclxuICAgIHVzZXJVbjogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2Zvb3Rlci91c2VyLXVuLnBuZycsXHJcbiAgICAvKiog5LiT5Lia5pyN5YqhICovXHJcbiAgICBzZXJ2aWNlOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZm9vdGVyL3NlcnZpY2UucG5nJ1xyXG4gIH0sXHJcblxyXG4gIC8qKiDkuoznu7TnoIEgKi9cclxuICBxckNvZGU6IHtcclxuICAgIC8qKiDlrqLmiLfmnI3liqEgKi9cclxuICAgIGN1c3RvbVNlcnZpY2U6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9xckNvZGUvY3VzdG9tLXNlcnZpY2UucG5nJyxcclxuXHJcbiAgICAvKiog6IOM5pmvICovXHJcbiAgICBiYWNrZ3JvdW5kOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vcXJDb2RlL2JhY2tncm91bmQucG5nJyxcclxuXHJcbiAgICAvKiog5paw5LqM57u056CBICovXHJcbiAgICBuZXdRckNvZGU6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9xckNvZGUvbmV3LXFyLWNvZGUucG5nJ1xyXG4gIH0sXHJcblxyXG4gIC8qKiDnirbmgIEgKi9cclxuICBzdGF0dXM6IHtcclxuICAgIC8qKiDlpLHotKUgKi9cclxuICAgIGZhaWw6ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9zdGF0dXMvZmFpbC5qcGcnXHJcbiAgfSxcclxuXHJcbiAgLyoqIOivpuaDhSAqL1xyXG4gIGRldGFpbDoge1xyXG4gICAgLyoqIOeUu+WGjCAqL1xyXG4gICAgYWxidW06ICdodHRwOi8vcWNiYW5ndmlweWlkaWFuY29tLm9zcy1jbi1iZWlqaW5nLmFsaXl1bmNzLmNvbS9kZXRhaWwvYWxidW0uanBnJyxcclxuXHJcbiAgICAvKiog5ZCN54mHICovXHJcbiAgICBjYXJkOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZGV0YWlsL2NhcmQuanBnJyxcclxuXHJcbiAgICAvKiog5oqY6aG1ICovXHJcbiAgICBmb2xkaW5nOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZGV0YWlsL2ZvbGRpbmcuanBnJyxcclxuXHJcbiAgICAvKiogbG9nbyAqL1xyXG4gICAgbG9nbzogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2RldGFpbC9sb2dvLmpwZycsXHJcblxyXG4gICAgLyoqIOWNlemhtSAqL1xyXG4gICAgcGFnZTogJ2h0dHA6Ly9xY2Jhbmd2aXB5aWRpYW5jb20ub3NzLWNuLWJlaWppbmcuYWxpeXVuY3MuY29tL2RldGFpbC9wYWdlLmpwZycsXHJcblxyXG4gICAgLyoqIOa1t+aKpSAqL1xyXG4gICAgcG9zdGVyOiAnaHR0cDovL3FjYmFuZ3ZpcHlpZGlhbmNvbS5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vZGV0YWlsL3Bvc3Rlci5qcGcnXHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKue8k+WtmOWQjeensFxyXG4gKi9cclxuY29uc3QgY2FjaGVOYW1lID0ge1xyXG4gIC8qKiDkvJjmg6DliLggKi9cclxuICBjb3Vwb246IHtcclxuICAgIC8qKiDkvJjmg6DliLhMaXN0ICovXHJcbiAgICBjb3Vwb25MaXN0OiAnY291cG9uTGlzdCcsXHJcbiAgICB1c2VyQ291cG9uOiAndXNlckNvdXBvbkxpc3QnXHJcbiAgfSxcclxuICAvKiog57G755uuICovXHJcbiAgdHlwZUdyb3VwOiB7XHJcbiAgICAvKiog57G755uuTGlzdCAqL1xyXG4gICAgZ3JvdXBMaXN0OiAnZ3JvdXBMaXN0J1xyXG4gIH0sXHJcblxyXG4gIC8qKiDkuqflk4EgKi9cclxuICB0eXBlOiB7XHJcbiAgICAvKiog57G755uu5Lqn5ZOBTGlzdCAqL1xyXG4gICAgdHlwZUxpc3Q6ICd0eXBlTGlzdCdcclxuICB9LFxyXG5cclxuICAvKiog6K6+6K6h5biIICovXHJcbiAgZGVzaWduZXI6IHtcclxuICAgIC8qKiDorr7orqHluIhMaXN0ICovXHJcbiAgICBkZXNpZ25lckxpc3Q6ICdkZXNpZ25lckxpc3QnXHJcbiAgfSxcclxuXHJcbiAgLyoqIOacjeWKoeWNleWPtyAqL1xyXG4gIHNlcnZpY2VGbG93OiB7XHJcbiAgICAvKiog5pyN5Yqh5Y2V5Y+3TGlzdCAqL1xyXG4gICAgc2VydmljZUZsb3dMaXN0OiAnc2VydmljZUZsb3dMaXN0J1xyXG4gIH0sXHJcblxyXG4gIC8qKiDor6bmg4UgKi9cclxuICBkZXRhaWw6IHtcclxuICAgIC8qKiDor6bmg4VMaXN0ICovXHJcbiAgICBkZXRhaWxMaXN0OiAnZGV0YWlsTGlzdCdcclxuICB9LFxyXG5cclxuICAvKiog5oqY5omj5Lqn5ZOBICovXHJcbiAgZGlzY291bnQ6IHtcclxuICAgIC8qKiDmipjmiaPkv6Hmga9MaXN0ICovXHJcbiAgICBkaXNjb3VudExpc3Q6ICdkaXNjb3VudExpc3QnXHJcbiAgfSxcclxuICAvKiog5a6i5oi35L+h5oGvICovXHJcbiAgY2xpZW50OiB7XHJcbiAgICAvKiog5a6i5oi35L+h5oGvTGlzdCAqL1xyXG4gICAgY3VzdG9tZXJzOiAnY3VzdG9tZXJzTGlzdCdcclxuICB9LFxyXG4gIC8qKiDmoYjkvosgKi9cclxuICBjYXNlOiB7XHJcbiAgICAvKiog5qGI5L6LTGlzdCAqL1xyXG4gICAgY2FzZUxpc3Q6ICdjYXNlTGlzdCcsXHJcbiAgICAvKiog57K+5ZOB5qGI5L6LTGlzdCAqL1xyXG4gICAgbWFzdGVycGllY2VMaXN0OiAnbWFzdGVycGllY2VMaXN0JyxcclxuICAgIC8qKiDnlKjmiLfllpzmrKLnsr7lk4HmoYjkvosgKi9cclxuICAgIG1hc3RlcnBpZWNlTGlrZUxpc3Q6ICdtYXN0ZXJwaWVjZUxpa2VMaXN0JyxcclxuICAgIC8qKiDnlKjmiLfllpzmrKLmoYjkvosgKi9cclxuICAgIGNhc2VMaWtlTGlzdDogJ2Nhc2VMaWtlTGlzdCdcclxuICB9LFxyXG4gIC8qKiDlrqLmnI0gKi9cclxuICBwcm9mZXNzaW9uYWw6IHtcclxuICAgIC8qKiDlrqLmnI1PYmplY3QgKi9cclxuICAgIHByb2Zlc3Npb25PYmplY3Q6ICdwcm9mZXNzaW9uT2JqZWN0J1xyXG4gIH0sXHJcbiAgLyoqIOmhvumXruS/oeaBryAqL1xyXG4gIGFkdmlzZXI6IHtcclxuICAgIC8qKiDnsbvnm67kuqflk4FMaXN0ICovXHJcbiAgICBhZHZpc2VySW5mbzogJ2FkdmlzZXJJbmZvTGlzdCdcclxuICB9LFxyXG4gIHVzZXI6IHtcclxuICAgIC8qKiDnsbvnm67kuqflk4FMaXN0ICovXHJcbiAgICB1c2VyaW5mbzogJ3VzZXJpbmZvTGlzdCdcclxuICB9LFxyXG4gIC8qKiDlhY3otLnmqKHmnb8gKi9cclxuICBmcmVlVGVtcGxhdGU6IHtcclxuICAgIC8qKiDmqKHmnb9MaXN0ICovXHJcbiAgICB0ZW1wbGF0ZTogJ3RlbXBsYXRlTGlzdCcsXHJcbiAgICBpbmR1c3RyeTogJ2luZHV0cnlMaXN0JyxcclxuICAgIGxpa2VMaXN0OiAnbGlrZUxpc3QnLFxyXG4gICAgZG93bmxvYWRMaXN0OiAnZG93bmxvYWRMaXN0J1xyXG4gIH0sXHJcblxyXG4gIG9yZGVyOiB7XHJcbiAgICBvcmRlckxpc3Q6ICdvcmRlckxpc3QnLFxyXG4gICAgb3JkZXJEZWF0aWw6ICdvcmRlckRldGFpbCcsXHJcbiAgICBkaWZmZXJlbmNlOiAnZGlmZmVyZW5jZUxpc3QnXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdGF0dXNJbmZvID0ge1xyXG4gICcwJzogJ+W+heaUr+S7mCcsXHJcbiAgJzEnOiAn5bey5pSv5LuYJyxcclxuICAnMic6ICfov5vivo/kuK0nLFxyXG4gICczJzogJ+W3suWujOaIkCcsXHJcbiAgJzQnOiAn5bey5Y+W5raIJ1xyXG59XHJcblxyXG5jb25zdCBoYW5kbGVTdGF0dXNJbmZvID0gW3tcclxuICAnMCc6ICfmnKrlpITnkIYnLFxyXG4gICcxJzogJ+WuouacjemcgOaxguehruiupCcsXHJcbiAgJzInOiAn5a6i5pyN6ZyA5rGC5L+u5pS5JyxcclxuICAnMyc6ICflrqLmiLfpnIDmsYLnoa7orqQnLFxyXG4gICc0JzogJ+i/m+ihjOiuvuiuoScsXHJcbiAgJzUnOiAn5o+Q5L6b5Yid56i/JyxcclxuICAnNic6ICfkv67mlLnnqL/ku7YnLFxyXG4gICc3JzogJ+iuvuiuoeWumueovycsXHJcbiAgJzgnOiAn5Y+R5rqQ5paH5Lu2J1xyXG59LCB7XHJcbiAgJzAnOiAn5pyq5aSE55CGJyxcclxuICAnMSc6ICflrqLmnI3pnIDmsYLnoa7orqQnLFxyXG4gICcyJzogJ+WuouacjemcgOaxguS/ruaUuScsXHJcbiAgJzMnOiAn5a6i5oi36ZyA5rGC56Gu6K6kJyxcclxuICAnNCc6ICflvbHniYfmiafooYwnLFxyXG4gICc1JzogJ+inhumikeWIneeovycsXHJcbiAgJzYnOiAn6KeG6aKR5L+u5q2jJyxcclxuICAnNyc6ICfop4bpopHlrprnqL8nLFxyXG4gICc4JzogJ+inhumikeaIkOWTgSdcclxufSwge1xyXG4gICcwJzogJ+acquWkhOeQhicsXHJcbiAgJzEnOiAn5a6i5pyN5ZWG5qCH56Gu6K6kJyxcclxuICAnMic6ICflrqLmnI3pnIDmsYLkv67mlLknLFxyXG4gICczJzogJ+WuouaIt+WVhuagh+ehruiupCcsXHJcbiAgJzQnOiAn6YCS5Lqk55Sz6K+3JyxcclxuICAnNSc6ICflt7LpgJLkuqQnLFxyXG4gICc2JzogJ+W3suWPl+eQhidcclxufV1cclxuXHJcbmNvbnN0IG5vdGljZUluZm8gPSB7XHJcbiAgJ2Rlc2lnbl9mbG93XzAnOiAnMjTlsI/ml7blhoXlrqLmnI3kvJrot5/mgqjnoa7orqTorr7orqHpnIDmsYLvvJsnLFxyXG4gICdkZXNpZ25fZmxvd18xJzogJ+WmguiuvuiuoemcgOaxguS4jeespu+8jOivt+iBlOezu+WuouacjeS4uuaCqOS/ruaUuScsXHJcbiAgJ2Rlc2lnbl9mbG93XzInOiAn5aaC6K6+6K6h6ZyA5rGC5LiN56ym77yM6K+36IGU57O75a6i5pyN5Li65oKo5L+u5pS5JyxcclxuICAnZGVzaWduX2Zsb3dfMyc6ICflpoLorr7orqHpnIDmsYLkuI3nrKbvvIzor7fogZTns7vlrqLmnI3kuLrmgqjkv67mlLknLFxyXG4gICdkZXNpZ25fZmxvd180JzogJ+iuvuiuoeW4iOWcqOWKoOe0p+iuvuiuoeS4re+8jOWmguacieeWkemXru+8jOivt+iBlOezu+WuouacjScsXHJcbiAgJ2Rlc2lnbl9mbG93XzUnOiAn6K+35Yu+6YCJ5oKo5ruh5oSP55qE6K6+6K6h77yM54K55Ye75LiL5pa54oCc5ruh5oSP5a6a56i/4oCd77yM5aaC5LiN5ruh5oSP54K55Ye75LiL5pa54oCc5LiN5ruh5oSP4oCd77yM5a6i5pyN5Lya5LiO5oKo6IGU57O777ybJyxcclxuICAnZGVzaWduX2Zsb3dfNic6ICflpoLmgqjlr7nnqL/ku7bmu6HmhI/vvIzor7fngrnlh7vkuIvmlrnigJzmu6HmhI/lrprnqL/igJ3vvIzlpoLkuI3mu6HmhI/or7fogZTns7vlrqLmnI3vvJsnLFxyXG4gICd2aWRlb19mbG93XzEnOiAn5aaC6ZyA5rGC5LiN56ym77yM6K+36IGU57O75a6i5pyN5Li65oKo5L+u5pS5JyxcclxuICAndmlkZW9fZmxvd18yJzogJ+WmgumcgOaxguS4jeespu+8jOivt+iBlOezu+WuouacjeS4uuaCqOS/ruaUuScsXHJcbiAgJ3ZpZGVvX2Zsb3dfMyc6ICflpoLpnIDmsYLkuI3nrKbvvIzor7fogZTns7vlrqLmnI3kuLrmgqjkv67mlLknLFxyXG4gICd2aWRlb19mbG93XzQnOiAn6K6+6K6h5biI5Zyo5Yqg57Sn6K6+6K6h5Lit77yM5aaC5pyJ55aR6Zeu77yM6K+36IGU57O75a6i5pyNJyxcclxuICAndmlkZW9fZmxvd181JzogJ+ivt+WLvumAieaCqOa7oeaEj+eahOiuvuiuoe+8jOeCueWHu+S4i+aWueKAnOa7oeaEj+Wumueov+KAne+8jOWmguS4jea7oeaEj+eCueWHu+S4i+aWueKAnOS4jea7oeaEj+KAne+8jOWuouacjeS8muS4juaCqOiBlOezu++8mycsXHJcbiAgJ3ZpZGVvX2Zsb3dfNic6ICflpoLmgqjlr7nnqL/ku7bmu6HmhI/vvIzor7fngrnlh7vkuIvmlrnigJzmu6HmhI/lrprnqL/igJ3vvIzlpoLkuI3mu6HmhI/or7fogZTns7vlrqLmnI3vvJsnLFxyXG4gICdyZWdpc3RyYXRpb25fb2ZfdHJhZGVfbWFya19mbG93XzAnOiAnMjTlsI/ml7blhoXlrqLmnI3kvJrot5/mgqjnoa7orqTllYbmoIfms6jlhozkv6Hmga8nLFxyXG4gICdyZWdpc3RyYXRpb25fb2ZfdHJhZGVfbWFya19mbG93XzEnOiAnMjTlsI/ml7blhoXlrqLmnI3kvJrot5/mgqjnoa7orqTllYbmoIfms6jlhozkv6Hmga8nLFxyXG4gICdyZWdpc3RyYXRpb25fb2ZfdHJhZGVfbWFya19mbG93XzInOiAnMjTlsI/ml7blhoXlrqLmnI3kvJrot5/mgqjnoa7orqTllYbmoIfms6jlhozkv6Hmga8nLFxyXG4gICdyZWdpc3RyYXRpb25fb2ZfdHJhZGVfbWFya19mbG93XzMnOiAnMjTlsI/ml7blhoXlrqLmnI3kvJrot5/mgqjnoa7orqTllYbmoIfms6jlhozkv6Hmga8nLFxyXG4gICdyZWdpc3RyYXRpb25fb2ZfdHJhZGVfbWFya19mbG93XzQnOiAn5a6i5pyN5Lq65ZGY5Lya5bC95b+r5biu5oKo6YCS5Lqk5ZWG5qCH5rOo5YaM55Sz6K+377yM6K+36ICQ5b+D562J5YCZJyxcclxuICAncmVnaXN0cmF0aW9uX29mX3RyYWRlX21hcmtfZmxvd181JzogJ+WVhuagh+W3sumAkuS6pOiHs+WVhuagh+WxgO+8jOS4i+WPkeWbnuaJp+aXtumXtOi+g+mVv+ivt+iAkOW/g+etieW+hScsXHJcbiAgJ3JlZ2lzdHJhdGlvbl9vZl90cmFkZV9tYXJrX2Zsb3dfNic6ICfllYbmoIfms6jlhozlt7Lov5vlhaXnm7Lmn6XpmLbmrrXvvIzmlLbliLDlm57miafmgqjljbPlj6/miZNUTeagh+S9v+eUqOWVhuaghydcclxufVxyXG5cclxuY29uc3QgcmVmdW5kU3RhdHVzSW5mbyA9IHtcclxuICAnMSc6ICfnlLPor7fpgIDmrL4nLFxyXG4gICcyJzogJ+WuoeaguOmAmui/hycsXHJcbiAgJzMnOiAn5a6h5qC45LiN6YCa6L+HJyxcclxuICAnNCc6ICflrozmiJDmiZPmrL4nXHJcbn1cclxuXHJcbi8qKiDorr7lpIfmmK/lkKbkuLppcGhvbmVYICovXHJcbnZhciBpc0lwaG9uZVggPSB7XHJcbiAgaXNJcGhvbmVYOiBmYWxzZVxyXG59XHJcblxyXG4vKipcclxuICog5Z+656GAdXJsXHJcbiAqL1xyXG5jb25zdCBiYXNlVXJsID0gaXNEZWJ1ZyA/ICdodHRwOi8vMTIwLjI3LjEzNS4xNjIvcWNiYW5nLXJlc3QnIDogJ2h0dHA6Ly9xY2JhbmcuaHoudGFlYXBwLmNvbSdcclxuXHJcbi8qKlxyXG4gKiDnlKjmiLfkv6Hmga9cclxuICovXHJcbnZhciB1c2VySW5mbyA9IHtcclxuICAvKiog5LyB5LiaaWQgKi9cclxuICBjb3JwSWQ6ICcnLFxyXG5cclxuICAvKiogdXNlcmlkICovXHJcbiAgdXNlcmlkOiAnJyxcclxuXHJcbiAgLyoqIGRpbmdJZCAqL1xyXG4gIGRpbmdJZDogJycsXHJcblxyXG4gIC8qKiDlp5PlkI0gKi9cclxuICBuYW1lOiAnJ1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGVudixcclxuICBtb2RhbCxcclxuICBhbmltYXRpb24sXHJcbiAgaXNEZWJ1ZyxcclxuICBpbWFnZVVybHMsXHJcbiAgY2FjaGVOYW1lLFxyXG4gIGRvbU1vZHVsZSxcclxuICBzdHJlYW0sXHJcbiAgc3RhdHVzSW5mbyxcclxuICBoYW5kbGVTdGF0dXNJbmZvLFxyXG4gIG5vdGljZUluZm8sXHJcbiAgcmVmdW5kU3RhdHVzSW5mbyxcclxuICBiYXNlVXJsLFxyXG4gIHVzZXJJbmZvLFxyXG4gIGlzSXBob25lWFxyXG59XHJcbiJdfQ==