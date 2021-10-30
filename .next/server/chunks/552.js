exports.id = 552;
exports.ids = [552,237];
exports.modules = {

/***/ 877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_jobtags_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(172);
/* harmony import */ var _styles_jobtags_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_jobtags_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const JobTags = ({
  skills
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
    className: (_styles_jobtags_module_css__WEBPACK_IMPORTED_MODULE_1___default().jobTags),
    children: skills.map(skill => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: skill
      }, skill);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JobTags);

/***/ }),

/***/ 552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ listTile)
});

// EXTERNAL MODULE: ./styles/card.module.css
var card_module = __webpack_require__(716);
var card_module_default = /*#__PURE__*/__webpack_require__.n(card_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./UI/libraries/card.js



const Card = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (card_module_default()).card,
    children: children
  });
};

/* harmony default export */ const card = (Card);
;// CONCATENATED MODULE: ./UI/components/JobListingSection/jobdescription.js


const JobDescription = ({
  jobDescription
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "overflow-auto",
    style: {
      maxHeight: "130px"
    },
    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "f7",
      children: jobDescription
    })
  });
};

/* harmony default export */ const jobdescription = (JobDescription);
// EXTERNAL MODULE: ./UI/components/JobListingSection/jobtags.js
var jobtags = __webpack_require__(877);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(583);
// EXTERNAL MODULE: ./UI/libraries/button.js
var libraries_button = __webpack_require__(379);
// EXTERNAL MODULE: ./UI/hooks/useGetFreelancer.js
var useGetFreelancer = __webpack_require__(869);
// EXTERNAL MODULE: ./UI/libraries/modal.js
var modal = __webpack_require__(525);
// EXTERNAL MODULE: ./styles/popup.module.css
var popup_module = __webpack_require__(199);
var popup_module_default = /*#__PURE__*/__webpack_require__.n(popup_module);
;// CONCATENATED MODULE: ./UI/libraries/popup.js




const Popup = ({
  children,
  onPopupClick,
  openPopup
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (popup_module_default()).popup,
    onClick: onPopupClick,
    children: [children[0], openPopup && /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: (popup_module_default()).popuptext,
      children: children[1]
    })]
  });
};

/* harmony default export */ const popup = (Popup);
// EXTERNAL MODULE: ./styles/profileavtar.module.css
var profileavtar_module = __webpack_require__(304);
var profileavtar_module_default = /*#__PURE__*/__webpack_require__.n(profileavtar_module);
;// CONCATENATED MODULE: ./UI/libraries/profileavtar.js



const ProfileAvtar = ({
  name,
  onAvtarClick
}) => {
  const shortName = name === null || name === void 0 ? void 0 : name.split(" ").map(x => x.charAt(0)).join("").toUpperCase();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (profileavtar_module_default()).profileavtar,
    onClick: onAvtarClick,
    children: shortName
  });
};

/* harmony default export */ const profileavtar = (ProfileAvtar);
// EXTERNAL MODULE: ./UI/components/UserSection/userdetails.js + 1 modules
var userdetails = __webpack_require__(80);
;// CONCATENATED MODULE: ./UI/components/EmployerSection/jobapplieduser.js










const AppliedUserCard = ({
  openPopup,
  onPopupClick,
  appliedBy,
  openedPopup
}) => {
  var _appliedBy$length;

  const {
    data,
    isLoading,
    isError,
    error
  } = (0,useGetFreelancer/* default */.Z)(appliedBy === null || appliedBy === void 0 ? void 0 : appliedBy.join(","), Boolean(openedPopup));
  const {
    0: openModal,
    1: setOpenModal
  } = (0,external_react_.useState)(false);
  const {
    0: avtarClickIndex,
    1: setAvtarClickIndex
  } = (0,external_react_.useState)(0);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [openModal && /*#__PURE__*/jsx_runtime_.jsx(modal/* default */.Z, {
      openModal: openModal,
      onClose: () => setOpenModal(false),
      children: /*#__PURE__*/jsx_runtime_.jsx(userdetails/* default */.Z, {
        userData: data === null || data === void 0 ? void 0 : data[avtarClickIndex],
        onSubmitCB: () => setOpenModal(false),
        isEmployerScreen: true
      })
    }), isLoading ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: "Loading..."
    }) : isError ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: ["Error: ", error.message]
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(popup, {
      openPopup: openPopup,
      onPopupClick: onPopupClick,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [(_appliedBy$length = appliedBy === null || appliedBy === void 0 ? void 0 : appliedBy.length) !== null && _appliedBy$length !== void 0 ? _appliedBy$length : 0, " people applied"]
      }), data === null || data === void 0 ? void 0 : data.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(profileavtar, {
        id: item.ID,
        name: item.name || "",
        onAvtarClick: () => {
          setOpenModal(true);
          setAvtarClickIndex(index);
        }
      }, item.ID))]
    })]
  });
};

/* harmony default export */ const jobapplieduser = (AppliedUserCard);
;// CONCATENATED MODULE: ./UI/components/JobListingSection/jobtuplefooter.js







const JobTupleFooter = ({
  jobId,
  postedAt,
  appliedBy,
  freeLancerId,
  onJobApply,
  isEmployerScreen
}) => {
  var _appliedBy$length;

  const {
    0: openPopup,
    1: setOpenPopup
  } = (0,external_react_.useState)(false);
  const {
    0: openedPopup,
    1: setOpenedPopup
  } = (0,external_react_.useState)("");

  const onApplyJob = (jobId, flId) => {
    onJobApply(jobId, flId);
  };

  const isJobApplied = appliedBy === null || appliedBy === void 0 ? void 0 : appliedBy.includes(freeLancerId === null || freeLancerId === void 0 ? void 0 : freeLancerId.toString());
  const daysAgo = Math.floor((Date.now() - new Date(postedAt)) / (1000 * 3600 * 24));
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "f7 flex items-center justify-between",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "pa1 bg-near-white f7 flex items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaRegClock */.fSQ, {
          className: "f6 pr1"
        }), daysAgo, " ", `${daysAgo > 1 ? "days" : "day"}`, " ago"]
      }), /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaUserAlt */.q1E, {
        className: "ml3 f6 pr1"
      }), isEmployerScreen && (appliedBy === null || appliedBy === void 0 ? void 0 : appliedBy.length) > 0 ? /*#__PURE__*/jsx_runtime_.jsx(jobapplieduser, {
        openPopup: openPopup,
        onPopupClick: () => {
          setOpenPopup(openPopup => !openPopup);
          setOpenedPopup(openedPopup => jobId === openedPopup ? "" : jobId);
        },
        openedPopup: openedPopup,
        appliedBy: appliedBy
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [(_appliedBy$length = appliedBy === null || appliedBy === void 0 ? void 0 : appliedBy.length) !== null && _appliedBy$length !== void 0 ? _appliedBy$length : 0, " people applied"]
      })]
    }), !isEmployerScreen && /*#__PURE__*/jsx_runtime_.jsx(libraries_button/* default */.Z, {
      className: "ml4",
      disabled: isJobApplied,
      onClick: () => onApplyJob(jobId, freeLancerId),
      children: isJobApplied ? "Applied" : "Apply"
    })]
  });
};

/* harmony default export */ const jobtuplefooter = (JobTupleFooter);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(58);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./UI/components/JobListingSection/jobtupleheader.js





const IconWithText = ({
  IconName,
  property,
  leftPadding = false
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()("flex", {
      "pl2": leftPadding,
      "pr2": !leftPadding
    }),
    children: [/*#__PURE__*/jsx_runtime_.jsx(IconName, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "pl2",
      children: property
    })]
  });
};

const JobTupleHeader = ({
  jobTitle,
  companyName,
  jobRequirements,
  salary,
  contactInfo,
  jobId,
  onJobEdit,
  isEmployerScreen = false
}) => {
  const onEditJob = jobId => {
    onJobEdit(jobId);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jobTupleHeader",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "relative",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "title f5 b",
        children: jobTitle
      }), isEmployerScreen && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "absolute right-0 top-0 pointer",
        onClick: () => onEditJob(jobId),
        children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaPencilAlt */.KHI, {})
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mb2"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex f6 mb2",
      children: [/*#__PURE__*/jsx_runtime_.jsx(IconWithText, {
        IconName: index_esm/* FaBuilding */.m17,
        property: companyName
      }), /*#__PURE__*/jsx_runtime_.jsx(IconWithText, {
        IconName: index_esm/* FaPhoneAlt */.DNl,
        property: contactInfo,
        leftPadding: true
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex f7",
      children: [/*#__PURE__*/jsx_runtime_.jsx(IconWithText, {
        IconName: index_esm/* FaShoppingBag */.Xfy,
        property: jobRequirements
      }), /*#__PURE__*/jsx_runtime_.jsx(IconWithText, {
        IconName: index_esm/* FaDollarSign */.RcD,
        property: salary,
        leftPadding: true
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "pl1",
        children: " / hr"
      })]
    })]
  });
};

/* harmony default export */ const jobtupleheader = (JobTupleHeader);
;// CONCATENATED MODULE: ./UI/components/JobListingSection/listTile.js









const ListTile = ({
  result,
  freeLancerId,
  onJobApply,
  isEmployerScreen = false,
  onJobEdit
}) => {
  const {
    ID,
    jobTitle,
    jobDescription,
    jobRequirements,
    skills,
    companyName,
    contactInfo,
    salary,
    appliedBy,
    postedAt
  } = result;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "pb2",
    children: /*#__PURE__*/jsx_runtime_.jsx(card, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(jobtupleheader, {
          jobTitle: jobTitle,
          jobId: ID,
          companyName: companyName,
          jobRequirements: jobRequirements,
          salary: salary,
          contactInfo: contactInfo,
          isEmployerScreen: isEmployerScreen,
          onJobEdit: onJobEdit
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mb2"
        }), /*#__PURE__*/jsx_runtime_.jsx(jobdescription, {
          jobDescription: jobDescription
        }), /*#__PURE__*/jsx_runtime_.jsx(jobtags/* default */.Z, {
          skills: skills
        }), /*#__PURE__*/jsx_runtime_.jsx(jobtuplefooter, {
          postedAt: postedAt,
          appliedBy: appliedBy,
          freeLancerId: freeLancerId,
          jobId: ID,
          isEmployerScreen: isEmployerScreen,
          onJobApply: onJobApply
        })]
      })
    })
  });
};

/* harmony default export */ const listTile = (ListTile);

/***/ }),

/***/ 80:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ userdetails),
  "T": () => (/* binding */ formSkillTags)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(585);
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(724);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);
// EXTERNAL MODULE: ./UI/constant.js
var constant = __webpack_require__(547);
// EXTERNAL MODULE: ./pages/api/index.js
var api = __webpack_require__(665);
;// CONCATENATED MODULE: ./UI/hooks/useUpdateFreeLancer.js


const updateFreeLancer = async param => {
  if (!param) {
    return null;
  }

  const {
    ID,
    name,
    designation,
    companyName,
    skills,
    githubLink
  } = param;
  const query = `mutation {
    updateFreeLancer(updateFreeLancer: {ID: "${ID}", name: "${name}", designation: "${designation}", companyName: "${companyName}", skills: "${skills}", githubLink: "${githubLink}"}) {
        ID
        name
        githubLink
        jobsApplied
        skills
        companyName
        designation
        avtarLink
      }
  }`;
  const freeLancer = await (0,api.default)("updateFreeLancer", query);
  return freeLancer;
};
function useUpdateFreeLancer(id) {
  const queryClient = (0,external_react_query_.useQueryClient)();
  return (0,external_react_query_.useMutation)(updateFreeLancer, {
    onSuccess: data => queryClient.setQueryData(["freelancer", {
      flId: id
    }], [data])
  });
}
// EXTERNAL MODULE: ./UI/libraries/button.js
var libraries_button = __webpack_require__(379);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./UI/components/UserSection/userdetails.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const formSkillTags = skills => {
  const skillTags = skills === null || skills === void 0 ? void 0 : skills.reduce((acc, curr) => {
    acc.push({
      value: curr,
      label: curr
    });
    return acc;
  }, []);
  return skillTags;
};

const fetchGithubProjects = async githubProfile => {
  const githubUser = githubProfile === null || githubProfile === void 0 ? void 0 : githubProfile.substr((githubProfile === null || githubProfile === void 0 ? void 0 : githubProfile.lastIndexOf("/")) + 1);
  const res = await fetch(`https://api.github.com/users/${githubUser}/repos`);
  return res.json();
};

const UserDetails = ({
  userData,
  onSubmitCB,
  isEmployerScreen
}) => {
  const {
    ID,
    name,
    githubLink,
    designation,
    companyName,
    skills
  } = userData;
  const intialState = {
    ID,
    name,
    githubLink,
    designation,
    companyName,
    skills
  };
  const {
    0: githubProfile
  } = (0,external_react_.useState)(githubLink);
  const {
    data,
    isLoading,
    isError
  } = (0,external_react_query_.useQuery)(["projects", {
    id: ID
  }], () => fetchGithubProjects(githubProfile), {
    staleTime: Infinity,
    cacheTime: 30000
  });
  const {
    0: alert,
    1: setAlert
  } = (0,external_react_.useState)(false);
  const {
    0: newItemObj,
    1: setNewItemObj
  } = (0,external_react_.useState)(intialState);
  const {
    0: linkValid,
    1: setLinkvalid
  } = (0,external_react_.useState)(true);
  const mutateUpdateFreeLancer = useUpdateFreeLancer(ID);

  const onSubmit = async () => {
    const urlRegex = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
    setLinkvalid(true);
    let isEmpty = Object.values(newItemObj).some(x => x === null || x === '');

    if (!urlRegex.test(newItemObj.githubLink)) {
      isEmpty = true;
      setLinkvalid(false);
    }

    if (isEmpty) {
      setAlert(true);
      return;
    }

    !isEmpty && (await mutateUpdateFreeLancer.mutate(newItemObj));
    onSubmitCB();
  };

  const fields = [{
    val: "name",
    label: "Name*"
  }, {
    val: "designation",
    label: "Designation*"
  }, {
    val: "companyName",
    label: "Company*"
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    "data-automation-id": "add-new-item",
    className: "flex flex-column w-100 h-50 center bg-white pa4 mt3",
    children: [linkValid && alert && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bg-red pv2 mb3 b white ph1 f6",
      children: "\u26A0 Please fill all details before you update"
    }), !linkValid && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bg-red pv2 mb3 b white ph1 f6",
      children: "\u26A0 Please provide a valid github link"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "pv2 flex flex-column",
      children: [fields.map((field, index) => {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-column mb3",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            className: "tl mb2",
            children: field.label
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            className: "tl pa1",
            type: "text",
            disabled: isEmployerScreen,
            maxLength: 40,
            onChange: e => setNewItemObj(_objectSpread(_objectSpread({}, newItemObj), {}, {
              [field.val]: e.target.value
            })),
            defaultValue: newItemObj[field.val]
          })]
        }, index);
      }), /*#__PURE__*/jsx_runtime_.jsx("label", {
        className: "tl mb2",
        children: "Github Link*"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        className: "tl pa1",
        type: "url",
        disabled: isEmployerScreen,
        placeholder: "https://www.example.com",
        onChange: e => setNewItemObj(_objectSpread(_objectSpread({}, newItemObj), {}, {
          "githubLink": e.target.value
        })),
        value: newItemObj.githubLink
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "validity"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mv2",
      children: "Skills*"
    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_select_default()), {
      isMulti: true,
      isDisabled: isEmployerScreen,
      options: constant/* tags */.p,
      defaultValue: formSkillTags(skills),
      onChange: val => setNewItemObj(_objectSpread(_objectSpread({}, newItemObj), {}, {
        "skills": val.map(v => v.value).join(",")
      }))
    }), isLoading ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: "Loading..."
    }) : isError ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: "Error loading projects"
    }) : data && /*#__PURE__*/(0,jsx_runtime_.jsxs)("details", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("summary", {
        className: "pr2 f6 mt2",
        children: "Click to see Projects"
      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
        children: data === null || data === void 0 ? void 0 : data.map(repo => {
          return /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: repo.name
          }, repo.id);
        })
      })]
    }), !isEmployerScreen && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex justify-center mt3",
      children: /*#__PURE__*/jsx_runtime_.jsx(libraries_button/* default */.Z, {
        className: "w-20",
        onClick: onSubmit,
        children: "Update"
      })
    })]
  });
};

/* harmony default export */ const userdetails = (UserDetails);

/***/ }),

/***/ 547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ tags)
/* harmony export */ });
const tags = [{
  value: 'react',
  label: 'react'
}, {
  value: 'java',
  label: 'java'
}, {
  value: 'mongodb',
  label: 'mongodb'
}, {
  value: 'python',
  label: 'python'
}, {
  value: 'webpack',
  label: 'webpack'
}, {
  value: 'HTML',
  label: 'HTML'
}, {
  value: 'css',
  label: 'css'
}, {
  value: 'javascript',
  label: 'javascript'
}, {
  value: 'nodejs',
  label: 'nodejs'
}, {
  value: 'ruby',
  label: 'ruby'
}];

/***/ }),

/***/ 869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetFreeLancer)
/* harmony export */ });
/* unused harmony export fetchDataFromGraphQL */
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(665);


const fetchDataFromGraphQL = async param => {
  const {
    flId
  } = param;

  if (!flId) {
    return null;
  }

  const query = ` {
    getFreelancerDetails(flId: "${flId}") {
        ID
        name
        githubLink
        designation
        companyName
        skills
        jobsApplied
        avtarLink
      }
  }`;
  const jobs = await (0,_pages_api_index__WEBPACK_IMPORTED_MODULE_1__.default)("getFreelancerDetails", query);
  return jobs;
};
function useGetFreeLancer(flId, enabled = true) {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)(["freelancer", {
    flId
  }], () => fetchDataFromGraphQL({
    flId
  }), {
    enabled: Boolean(enabled)
  });
}

/***/ }),

/***/ 379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const Button = ({
  children,
  className,
  disabled = false,
  onClick
}) => {
  const disabledClass = classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, {
    "o-20": disabled
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: `pa2 bg-blue br2 white tc pointer ${disabledClass}`,
    onClick: onClick,
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ 525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_modal_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(922);
/* harmony import */ var _styles_modal_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_modal_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);





const Modal = ({
  children,
  openModal,
  onClose
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: openModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "myModal",
        className: (_styles_modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modal),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "bg-near-white center pa3 w-60-l",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: (_styles_modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().close),
            onClick: onClose,
            children: "\xD7"
          }), children]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ 665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetchApi = async (gqlKey, query) => {
  const url = "http://localhost:3600/graphql";
  const opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query
    })
  };
  const response = await fetch(url, opts);
  const data = await response.json();
  return data.data[gqlKey];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchApi);

/***/ }),

/***/ 716:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "card_card__1p1Sl"
};


/***/ }),

/***/ 172:
/***/ ((module) => {

// Exports
module.exports = {
	"jobTags": "jobtags_jobTags__2tX50"
};


/***/ }),

/***/ 922:
/***/ ((module) => {

// Exports
module.exports = {
	"modal": "modal_modal__xR6yj",
	"close": "modal_close__1x7qJ"
};


/***/ }),

/***/ 199:
/***/ ((module) => {

// Exports
module.exports = {
	"popup": "popup_popup__DrCJW",
	"popuptext": "popup_popuptext__lfKRU",
	"fadeIn": "popup_fadeIn__3ck_t",
	"show": "popup_show__1GX4-"
};


/***/ }),

/***/ 304:
/***/ ((module) => {

// Exports
module.exports = {
	"profileavtar": "profileavtar_profileavtar__3_sbX"
};


/***/ })

};
;