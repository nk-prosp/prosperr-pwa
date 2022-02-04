/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
import storage from 'utils/storage';
import { format_date, toFromNow } from 'utils/moment.util';
import queryString from 'query-string';
import {
  isEmail as _isEmail,
  isEmpty as _isEmpty,
  isNumeric as _isNumeric,
  isURL as _isURL
} from 'utils/validator.util';
import { dim } from 'styles/theme';
import React from 'react';
import {
  StorageKey,
  HeaderLeftTabs,
  ErrorMsg,
  DateConversionType,
  wordLimit
} from './constants';

const appUtils = {
  downloadCSVFile: (data, filename, mimetype) => {
    if (!data) return;
    const blob =
      data.constructor !== Blob
        ? new Blob([data], { type: mimetype || 'application/octet-stream' })
        : data;
    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, filename);
      return;
    }
    const lnk = document.createElement('a');
    const url = window.URL;
    let objectURL;
    if (mimetype) {
      lnk.type = mimetype;
    }
    lnk.download = filename || 'untitled';
    // eslint-disable-next-line no-multi-assign
    lnk.href = objectURL = url.createObjectURL(blob);
    lnk.dispatchEvent(new MouseEvent('click'));
    setTimeout(url.revokeObjectURL.bind(url, objectURL));
  },

  delay: (millisecond = 1000) =>
    new Promise(res => setTimeout(res, millisecond)),

  clone: (data, type = {}, shallow = true) => {
    if (shallow) return Object.assign(type, data);
    return JSON.parse(JSON.stringify(data));
  },

  isString: obj => {
    return obj != null && (typeof obj === 'string' || obj instanceof String);
  },

  isStringEndsWith: (str, suffixes) => {
    if (appUtils.isEmptyString(str) || suffixes == null) return false;
    for (let i = 0; i < suffixes.length; i += 1) {
      if (str.endsWith(suffixes[i])) return true;
    }
    return false;
  },

  isStringContainsEmail: str => {
    return (
      appUtils.isNotEmptyString(str) &&
      str.search(/([^.@\s]+)(\.[^.@\s]+)*@([^.@\s]+\.)+([^.@\s]+)/) !== -1
    );
  },

  replaceEmailsInString: (str, replaceWith) => {
    if (appUtils.isStringContainsEmail(replaceWith)) replaceWith = '';

    let shouldReplace =
      appUtils.isNotEmptyString(str) && appUtils.isStringContainsEmail(str);
    while (shouldReplace) {
      str = str.replace(
        /([^.@\s]+)(\.[^.@\s]+)*@([^.@\s]+\.)+([^.@\s]+)/,
        replaceWith || ''
      );
      shouldReplace =
        appUtils.isNotEmptyString(str) && appUtils.isStringContainsEmail(str);
    }

    return str;
  },

  roundOffToTwoPlaces: number => {
    if (typeof number !== 'number') return 0;
    return Math.round((number + Number.EPSILON) * 100) / 100;
  },

  convertEmphasizedStringToBoldOrHighlightComponent: (
    string,
    startTag,
    endTag,
    type
  ) => {
    if (
      appUtils.isEmptyString(string) ||
      appUtils.isEmptyString(startTag) ||
      appUtils.isEmptyString(endTag)
    )
      return string;
    return string
      .toString()
      .split(startTag)
      .map(startSplitText => {
        if (startSplitText.includes(endTag)) {
          return startSplitText.split(endTag).map((endStringText, index) => {
            if (index === 0) {
              return (
                <React.Fragment
                  key={appUtils.convertStringToKey(`${endStringText}${index}`)}
                >
                  {type === 'MENTION' ? (
                    <span className="userMentions"> {endStringText} </span>
                  ) : (
                    <em>{endStringText}</em>
                  )}
                </React.Fragment>
              );
            }
            return endStringText;
          });
        }
        return startSplitText;
      });
  },

  getStringFromEmphasizedString: srcString => {
    const startTag = '<em>';
    const endTag = '</em>';
    if (
      appUtils.isEmptyString(srcString) ||
      appUtils.isEmptyString(startTag) ||
      appUtils.isEmptyString(endTag)
    )
      return srcString;
    const finalArray = srcString
      .toString()
      .split(startTag)
      .map(startSplitText => {
        if (startSplitText.includes(endTag)) {
          return startSplitText
            .split(endTag)
            .map(endStringText => {
              return endStringText;
            })
            .join('');
        }
        return startSplitText;
      });
    return finalArray.join('');
  },

  convertStringToNewLineComponent: (
    srcString,
    containsUserMentions = true,
    shouldTrim = true
  ) => {
    if (appUtils.isEmptyString(srcString)) return srcString;

    const mentionStartTag = "<span class='userMentions'>";
    const mentionEndTag = '</span>';
    const highlightStartTag = '<em>';
    const highlightEndTag = '</em>';

    let finalString = srcString.toString();
    if (shouldTrim) finalString = finalString.trim();
    return finalString.split('\n').map((text, index) => {
      return (
        <React.Fragment key={appUtils.convertStringToKey(`${text}${index}`)}>
          {containsUserMentions &&
          text.includes(mentionStartTag) &&
          text.includes(mentionEndTag)
            ? appUtils.convertEmphasizedStringToBoldOrHighlightComponent(
                text,
                mentionStartTag,
                mentionEndTag,
                'MENTION'
              )
            : text.includes(highlightStartTag) && text.includes(highlightEndTag)
            ? appUtils.convertEmphasizedStringToBoldOrHighlightComponent(
                text,
                highlightStartTag,
                highlightEndTag,
                'HIGHLIGHT'
              )
            : text}
          <br />
        </React.Fragment>
      );
    });
  },

  convertStringToKey: srcString => {
    if (appUtils.isEmptyString(srcString)) return srcString;
    return srcString
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z_]/g, '_');
  },

  parseJson: jsonString => {
    if (appUtils.isEmptyString(jsonString)) return jsonString;
    try {
      return JSON.parse(jsonString);
    } catch (e) {
      return jsonString;
    }
  },

  hasProperty: (obj, property) => {
    return obj != null && Object.prototype.hasOwnProperty.call(obj, property);
  },

  areSameObjects: (obj1, obj2, properties = null) => {
    if (properties == null)
      return JSON.stringify(obj1) === JSON.stringify(obj2);
    if (properties != null && obj1 != null && obj2 != null) {
      let hasSameProperties = true;
      properties.forEach(property => {
        if (
          !appUtils.hasProperty(obj1, property) ||
          !appUtils.hasProperty(obj1, property) ||
          JSON.stringify(obj1[property]) !== JSON.stringify(obj2[property])
        ) {
          hasSameProperties = false;
        }
      });
      return hasSameProperties;
    }
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  },

  merge: (target, ...sources) => {
    return Object.assign(target, sources);
  },

  filterList: (dataList, key, filterKeyword = '') => {
    return dataList.filter(item =>
      item[key].toLowerCase().includes(filterKeyword.toLowerCase())
    );
  },

  filterListByEitherOfTwoParams: (dataList, key1, key2, filterKeyword = '') => {
    return dataList.filter(
      item =>
        (item[key1] &&
          item[key1].toLowerCase().includes(filterKeyword.toLowerCase())) ||
        (item[key2] &&
          item[key2].toLowerCase().includes(filterKeyword.toLowerCase()))
    );
  },

  compareValues: (key, order = 'asc') => {
    return (a, b) => {
      if (appUtils.hasProperty(a, key) && !appUtils.hasProperty(b, key)) {
        // property does exist in a but not in b, bring a to top
        return -1;
      }
      if (!appUtils.hasProperty(a, key) && appUtils.hasProperty(b, key)) {
        // property does exist in b but not in a, bring b to top
        return 1;
      }
      if (!appUtils.hasProperty(a, key) && !appUtils.hasProperty(b, key)) {
        // property doesn't exist on either object
        return 0;
      }

      if (a[key] === b[key]) {
        return 0;
      }

      const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === 'desc' ? comparison * -1 : comparison;
    };
  },

  dataURItoBlob: dataURI => {
    // convert base64/URLEncoded data component to raw binary data held in a string
    let byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
    else byteString = unescape(dataURI.split(',')[1]);
    // separate out the mime component
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    // write the bytes of the string to a typed array
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i += 1) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], { type: mimeString });
  },

  compareLists: (dataList1, dataList2, key) => {
    if (dataList1 == null && dataList2 == null) {
      return true;
    }
    if (
      (dataList1 != null && dataList2 == null) ||
      (dataList1 == null && dataList2 != null) ||
      dataList1.length !== dataList2.length
    ) {
      return false;
    }
    const sortedList1 = appUtils
      .clone(dataList1, [])
      .sort(appUtils.compareValues(key));
    const sortedList2 = appUtils
      .clone(dataList2, [])
      .sort(appUtils.compareValues(key));
    for (let index = 0; index < sortedList1.length; index += 1) {
      if (sortedList1[index][key] !== sortedList2[index][key]) {
        return false;
      }
    }
    return true;
  },

  overwriteDataInList: (dataList, key, data) => {
    const dataListClone = appUtils.clone(dataList, []);
    const index = dataListClone.findIndex(item => item[key] === data[key]);
    dataListClone.splice(index, 1, data);
    return dataListClone;
  },

  isListContainsData: (dataList, key, value) => {
    return dataList && dataList.findIndex(item => item[key] === value) > -1;
  },

  listDataIndex: (dataList, key, value) => {
    return dataList ? dataList.findIndex(item => item[key] === value) : -1;
  },

  removeDuplicates: (dataList, key) => {
    return dataList.filter((obj, pos, arr) => {
      return arr.map(mObj => mObj[key]).indexOf(obj[key]) === pos;
    });
  },

  deleteFromList: (list, key, value) => {
    return list.filter(obj => obj[key] !== value);
  },

  capitalizeString: str => {
    if (str == null || str.trim().length === 0) return str;
    return str[0].toUpperCase() + str.slice(1);
  },

  createMarkupString: text => {
    let temp = text;
    // eslint-disable-next-line no-useless-escape
    const urlRegex = /(http:\/\/www\.|https:\/\/|www\.|http:\/\/|https:\/\/)\b(?:[a-z\d])(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))?/g;
    if (text.match(urlRegex)) {
      temp = text.replace(urlRegex, url => {
        let tempUrl = url;
        if (!url.includes('http')) {
          tempUrl = `http://${url}`;
        }
        return `<a href="${tempUrl}" target="_blank">${url}</a>`;
      });
    }
    return temp.replace(/\r?\n/g, '<br />');
  },

  createStringToMarkup: value => {
    let tempMessage = value;
    if (value.match(/(target="_blank">)/g)) {
      let url = '';
      let lastIndexOfMention = 0;
      let startIndexOfName = '';
      let endIndexOfName = '';

      // eslint-disable-next-line no-useless-escape
      const count = value.match(/(target="_blank">)/g).length;

      if (count > 0) {
        for (let i = 0; i < count; i += 1) {
          startIndexOfName =
            value.indexOf('target="_blank">', lastIndexOfMention) + 4;
          endIndexOfName = value.indexOf('</a>', startIndexOfName);

          url = value.slice(startIndexOfName, endIndexOfName);

          lastIndexOfMention = endIndexOfName;

          tempMessage = tempMessage.replace(
            `<a href="${url}" target="_blank">${url}</a>`,
            `${url}`
          );
        }
      }
    }
    return tempMessage;
  },

  convertMentionsToStringForEdit: (value, data) => {
    let tempMessage = value;
    tempMessage = appUtils.convertMentionsToString(tempMessage);
    // eslint-disable-next-line no-useless-escape
    const count =
      tempMessage &&
      tempMessage.match(/(\@)/g) &&
      tempMessage.match(/(\@)/g).length;
    if (count > 0) {
      for (let i = 0; i < count; i += 1) {
        const listOfKeys = Object.keys(data.tagged_users);
        for (let j = 0; j < listOfKeys.length; j += 1) {
          if (
            data.tagged_users &&
            data.tagged_users[listOfKeys[j]] &&
            data.tagged_users[listOfKeys[j]].name
          ) {
            tempMessage = tempMessage.replace(
              `@${data.tagged_users[listOfKeys[j]].name}`,
              `//~${data.tagged_users[listOfKeys[j]].user_reference_id}~//`
            );
          }
        }
      }
    }
    return tempMessage;
  },

  getUserIdsFromMentionString: value => {
    const userIdsArray = [];
    // eslint-disable-next-line no-useless-escape
    if (value.match(/(\/\/\~\[)/g)) {
      let lastIndexOfMention = 0;
      let startIndexOfName = '';
      let endIndexOfName = '';
      let startIndexOfId = '';
      let endIndexOfId = '';

      // eslint-disable-next-line no-useless-escape
      const count = value.match(/(\/\/\~\[)/g).length;
      if (count > 0) {
        for (let i = 0; i < count; i += 1) {
          startIndexOfName = value.indexOf('//~[', lastIndexOfMention) + 4;
          endIndexOfName = value.indexOf('](', startIndexOfName);

          startIndexOfId = value.indexOf('](', endIndexOfName) + 2;
          endIndexOfId = value.indexOf(')~//', startIndexOfId);

          userIdsArray.push(value.slice(startIndexOfId, endIndexOfId));
          lastIndexOfMention = endIndexOfId;
        }
      }
    }
    return userIdsArray;
  },

  convertMentionsToString: value => {
    let tempMessage = value;
    // eslint-disable-next-line no-useless-escape
    if (value.match(/(\/\/\~\[)/g)) {
      const obj = {};
      let lastIndexOfMention = 0;
      let startIndexOfName = '';
      let endIndexOfName = '';
      let startIndexOfId = '';
      let endIndexOfId = '';

      // eslint-disable-next-line no-useless-escape
      const count = value.match(/(\/\/\~\[)/g).length;

      if (count > 0) {
        for (let i = 0; i < count; i += 1) {
          startIndexOfName = value.indexOf('//~[', lastIndexOfMention) + 4;
          endIndexOfName = value.indexOf('](', startIndexOfName);

          startIndexOfId = value.indexOf('](', endIndexOfName) + 2;
          endIndexOfId = value.indexOf(')~//', startIndexOfId);

          obj.name = value.slice(startIndexOfName, endIndexOfName);
          obj.id = value.slice(startIndexOfId, endIndexOfId);

          lastIndexOfMention = endIndexOfId;

          tempMessage = tempMessage.replace(
            `//~[${obj.name}](${obj.id})~//`,
            `//~${obj.id}~//`
          );
        }
      }
    }
    return tempMessage;
  },

  convertStringToMentions: (data, type) => {
    let tempMessage = data.message;
    // eslint-disable-next-line no-useless-escape
    const count =
      data &&
      data.message &&
      data.message.match(/(\/\/\~)/g) &&
      data.message.match(/(\/\/\~)/g).length;
    if (count > 0) {
      for (let i = 0; i < count; i += 1) {
        const listOfKeys = Object.keys(data.tagged_users);
        for (let j = 0; j < listOfKeys.length; j += 1) {
          if (
            data.tagged_users &&
            data.tagged_users[listOfKeys[j]] &&
            data.tagged_users[listOfKeys[j]].name &&
            type !== 'edit' &&
            type !== 'edit_comment' &&
            type !== 'reply_comment'
          ) {
            tempMessage = tempMessage.replace(
              `//~${listOfKeys[j]}~//`,
              `<span class='userMentions'>@${
                data.tagged_users[listOfKeys[j]].name
              }</span>`
            );
          } else if (type === 'edit' || type === 'reply_comment') {
            tempMessage = tempMessage.replace(
              `//~${listOfKeys[j]}~//`,
              `@${data.tagged_users[listOfKeys[j]].name}`
            );
          } else if (type === 'edit_comment') {
            tempMessage = tempMessage.replace(
              `//~${listOfKeys[j]}~//`,
              `//~[${data.tagged_users[listOfKeys[j]].name}](${
                data.tagged_users[listOfKeys[j]].user_reference_id
              })~//`
            );
          }
        }
      }
    }
    return tempMessage;
  },

  getValueFromQueryParam: key => {
    return queryString.parse(window.location.search)[key];
  },

  convertHexToRGBA: function convertHexToRGBA(hex, opacity) {
    let h = hex.replace('#', '');
    h = h.match(new RegExp(`(.{${h.length / 3}})`, 'g'));
    for (let i = 0; i < h.length; i += 1)
      h[i] = parseInt(h[i].length === 1 ? h[i] + h[i] : h[i], 16);
    if (typeof opacity !== 'undefined') h.push(opacity);
    return `rgba(${h.join(',')})`;
  },

  getSelectedTeam: (teams = [], selectedTeamId) => {
    if (selectedTeamId) {
      if (selectedTeamId === HeaderLeftTabs[1].tag_id) {
        return HeaderLeftTabs[1];
      }
      if (selectedTeamId === HeaderLeftTabs[2].tag_id) {
        return HeaderLeftTabs[2];
      }
      for (let i = 0; i <= teams.length; i += 1) {
        if (teams[i] && selectedTeamId === teams[i].tag_id) {
          return teams[i];
        }
      }
    }
    return HeaderLeftTabs[0];
  },

  isHeaderLeftTabs: tag_id => {
    return (
      tag_id == null ||
      tag_id === HeaderLeftTabs[0].tag_id ||
      tag_id === HeaderLeftTabs[1].tag_id ||
      tag_id === HeaderLeftTabs[2].tag_id
    );
  },

  isEmptyString: str => {
    return str == null || _isEmpty(str.toString().trim());
  },

  isNotEmptyString: str => {
    return !appUtils.isEmptyString(str);
  },

  isEmail: str => {
    return appUtils.isNotEmptyString(str) && _isEmail(str.trim());
  },

  getNameFromEmail: str => {
    if (str == null) return str;
    return appUtils.capitalizeString(
      str.toString().trim().split('@')[0].split('.')[0].split('_')[0]
    );
  },

  isURL: str => {
    return appUtils.isNotEmptyString(str) && _isURL(str);
  },

  isNumeric: str => {
    return appUtils.isNotEmptyString(str) && _isNumeric(str);
  },

  validatePassword: password => {
    if (password.length < 6) {
      return ErrorMsg.PASSWORD_LENGTH_ERROR;
    }
    if (password.length >= 6) {
      return true;
    }
    const lowercaseRegex = new RegExp('(?=.*[a-z])');
    const uppercaseRegex = new RegExp('(?=.*[A-Z])');
    const numericRegex = new RegExp('(?=.*[0-9])');
    const specialCharacterRegex = new RegExp("[!@_#$%^&*(),.?':{}|<>]");

    if (!lowercaseRegex.test(password)) {
      return ErrorMsg.LOWERCASE_PASSWORD;
    }
    if (!uppercaseRegex.test(password)) {
      return ErrorMsg.UPPERCASE_PASSWORD;
    }
    if (!specialCharacterRegex.test(password)) {
      return ErrorMsg.SPECIAL_CHARACTER;
    }
    if (!numericRegex.test(password)) {
      return ErrorMsg.NUMERIC_PASSWORD;
    }
    return true;
  },

  convertTimeToString: (
    timestamp,
    conversionType = DateConversionType.HOUR_AND_DATE
  ) => {
    if (!timestamp) {
      return '';
    }
    const timestampDate = new Date(timestamp);
    const currentDate = new Date();

    // get seconds
    const seconds = Math.abs(currentDate - timestampDate) / 1000;
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const completeCurrentDate = `${currentDate.getDate()} / ${
      currentDate.getMonth() + 1
    } / ${currentDate.getFullYear()}`;
    const completeTimeStampDate = `${timestampDate.getDate()} / ${
      timestampDate.getMonth() + 1
    } / ${timestampDate.getFullYear()}`;
    if (conversionType === DateConversionType.HOUR_AND_DATE) {
      if (hours < 24 && completeCurrentDate === completeTimeStampDate) {
        return `at ${format_date(timestampDate, 'hh$:$mm$ $a')}`;
      }
      if (hours > 24 && hours < 48) {
        return 'yesterday';
      }
      // rest all case returning this value
      return `on ${format_date(timestampDate, 'Do$ $MMM')}`;
    }
    return toFromNow(timestampDate);
  },

  mapGoogleUserToResponse: res => {
    const authResponse = res.getAuthResponse();
    const basicProfile = res.getBasicProfile();
    res.googleId = basicProfile.getId();
    res.tokenObj = authResponse;
    res.tokenId = authResponse.id_token;
    res.accessToken = authResponse.access_token;
    res.profileObj = {
      googleId: basicProfile.getId(),
      imageUrl: basicProfile.getImageUrl(),
      email: basicProfile.getEmail(),
      name: basicProfile.getName(),
      givenName: basicProfile.getGivenName(),
      familyName: basicProfile.getFamilyName()
    };
    return res;
  },

  calcPercentageRange: (value, limit) => {
    if ((value * 100) / limit >= 0 && (value * 100) / limit <= 30) {
      return wordLimit.ZERO;
    }
    if ((value * 100) / limit > 30 && (value * 100) / limit <= 70) {
      return wordLimit.LOW;
    }
    if ((value * 100) / limit > 70 && (value * 100) / limit < 100) {
      return wordLimit.MEDIUM;
    }
    if ((value * 100) / limit === 100) {
      return wordLimit.FULL;
    }
    return wordLimit.OVER;
  },

  getMonthName: monthIndex => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    return months[monthIndex];
  },

  getDateObjectFromString: date => {
    if (!date) return null;
    return new Date(date);
  },

  convertDateToString: dateObj => {
    if (!dateObj) return null;
    let date = dateObj.getDate();
    date = date < 10 ? `0${date}` : date;
    const year = dateObj.getYear() + 1900;
    let month = dateObj.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    return `${year}-${month}-${date}`;
  },

  adjustInputHeight: (elementID, resetHeight, defaultHeight) => {
    const elem = document.getElementById(elementID);
    if (elem) {
      if (resetHeight) {
        elem.setAttribute('style', `height: ${defaultHeight || dim._50px}`);
        return;
      }
      elem.setAttribute('style', `height: ${defaultHeight || dim._50px}`);
      elem.setAttribute('style', `height: ${elem.scrollHeight}px`);
    }
  },

  getMinifiedText: (text, requiredLength) => {
    if (text.length <= requiredLength || appUtils.isEmptyString(text))
      return text;
    let index = requiredLength;
    while (text[index] !== ' ' && index <= text.length) {
      index += 1;
    }
    if (index > requiredLength + 20) {
      index = requiredLength;
    }
    let finalText = index < text.length - 20 ? text.substring(0, index) : text;
    const differentLines = finalText.split(/\r?\n/g);
    if (differentLines.length > 3)
      finalText = differentLines.slice(0, 3).join('\n');
    return `${finalText}...`;
  },

  linkDecorator: (href, text, key) => (
    <a href={href} key={key} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  ),

  modifyDataLabelsUsingFunction: (data, customizingFunction) => {
    const cloneData = appUtils.clone(data);
    cloneData.labels = cloneData.labels.map(label =>
      customizingFunction(label)
    );
    return cloneData;
  },

  getCircularProgressColorMapping: (colorArray, inverse = false) => {
    const numberOfSteps = 4;
    const stepSize = 100 / numberOfSteps; //make it more reusable by passing max value and number of steps, currenetly its 100 and 4
    const finalColorMapping = [];
    for (let i = 0; i < numberOfSteps; i += 1) {
      finalColorMapping.push({
        from: i === 0 ? 0 : stepSize * i + 1,
        to: stepSize * (i + 1),
        color: inverse ? colorArray[colorArray.length - 1 - i] : colorArray[i]
      });
    }
    return finalColorMapping;
  },

  convertNumberStringToPercentageString: numberString => {
    if (/[0-9]+-[0-9]+/.test(numberString)) {
      const [startValue, endValue] = numberString.split('-');
      return `${startValue}-${endValue}%`;
    }
    if (/> [0-9+]/.test(numberString)) {
      const greaterThanValue = numberString.split('> ')[1];
      return `More than ${greaterThanValue}%`;
    }
    if (/< [0-9+]/.test(numberString)) {
      const lessThanValue = numberString.split('< ')[1];
      return `Less than ${lessThanValue}%`;
    }
  },

  convertPercentLabelToFilterValues: value => {
    if (value.startsWith('Less than')) {
      const percentValue = value.split(' ')[2];
      return [null, percentValue.substring(0, percentValue.length - 1)];
    }
    if (value.startsWith('More than')) {
      const percentValue = value.split(' ')[2];
      return [percentValue.substring(0, percentValue.length - 1), null];
    }
    return value.substring(0, value.length - 1).split('-');
  }
};

export default appUtils;

export const delay = millisecond => {
  return appUtils.delay(millisecond);
};

export const downloadCSVFile = (data, filename, mimetype) => {
  return appUtils.downloadCSVFile(data, filename, mimetype);
};

export const clone = (data, type = {}, shallow = true) => {
  return appUtils.clone(data, type, shallow);
};

export const convertStringToNewLineComponent = (
  srcString,
  containsUserMentions = true,
  shouldTrim = true
) => {
  return appUtils.convertStringToNewLineComponent(
    srcString,
    containsUserMentions,
    shouldTrim
  );
};

export const convertStringToKey = srcString => {
  return appUtils.convertStringToKey(srcString);
};

export const parseJson = jsonString => {
  return appUtils.parseJson(jsonString);
};

export const isString = obj => {
  return appUtils.isString(obj);
};

export const isStringEndsWith = (str, suffixes) => {
  return appUtils.isStringEndsWith(str, suffixes);
};

export const isStringContainsEmail = str => {
  return appUtils.isStringContainsEmail(str);
};

export const replaceEmailsInString = (str, replaceWith) => {
  return appUtils.replaceEmailsInString(str, replaceWith);
};

export const roundOffToTwoPlaces = number => {
  return appUtils.roundOffToTwoPlaces(number);
};

export const merge = (target, ...sources) => {
  return appUtils.merge(target, sources);
};

export const hasProperty = (obj, property) => {
  return appUtils.hasProperty(obj, property);
};

export const areSameObjects = (obj1, obj2, properties = null) => {
  return appUtils.areSameObjects(obj1, obj2, properties);
};

export const filterList = (dataList, key, filterKeyword = '') => {
  return appUtils.filterList(dataList, key, filterKeyword);
};

export const deleteFromList = (dataList, attribute, keyword) => {
  return appUtils.deleteFromList(dataList, attribute, keyword);
};

export const compareValues = (key, order) => {
  return appUtils.compareValues(key, order);
};

export const removeDuplicates = (dataList, key) => {
  return appUtils.removeDuplicates(dataList, key);
};

export const dataURItoBlob = dataURI => {
  return appUtils.dataURItoBlob(dataURI);
};

export const compareLists = (dataList1, dataList2, key) => {
  return appUtils.compareLists(dataList1, dataList2, key);
};

export const capitalizeString = str => {
  return appUtils.capitalizeString(str);
};

export const createMarkupString = text => {
  return appUtils.createMarkupString(text);
};

export const createStringToMarkup = text => {
  return appUtils.createStringToMarkup(text);
};

export const convertMentionsToString = value => {
  return appUtils.convertMentionsToString(value);
};

export const convertStringToMentions = (data, type) => {
  return appUtils.convertStringToMentions(data, type);
};

export const convertMentionsToStringForEdit = (value, data) => {
  return appUtils.convertMentionsToStringForEdit(value, data);
};

export const overwriteDataInList = (dataList, key, data) => {
  return appUtils.overwriteDataInList(dataList, key, data);
};

export const isListContainsData = (dataList, key, value) => {
  return appUtils.isListContainsData(dataList, key, value);
};

export const listDataIndex = (dataList, key, value) => {
  return appUtils.listDataIndex(dataList, key, value);
};

export const getValueFromQueryParam = key => {
  return appUtils.getValueFromQueryParam(key);
};

export const convertHexToRGBA = (hex, opacity) => {
  return appUtils.convertHexToRGBA(hex, opacity);
};

export const getSelectedTeam = (teams, selectedTeamId) => {
  return appUtils.getSelectedTeam(teams, selectedTeamId);
};

export const isHeaderLeftTabs = tag_id => {
  return appUtils.isHeaderLeftTabs(tag_id);
};

export const validatePassword = password => {
  return appUtils.validatePassword(password);
};

export const isEmptyString = str => {
  return appUtils.isEmptyString(str);
};

export const isNotEmptyString = str => {
  return appUtils.isNotEmptyString(str);
};

export const isEmail = str => {
  return appUtils.isEmail(str);
};

export const getNameFromEmail = str => {
  return appUtils.getNameFromEmail(str);
};

export const isURL = str => {
  return appUtils.isURL(str);
};

export const isNumeric = str => {
  return appUtils.isNumeric(str);
};

export const convertTimeToString = (timestamp, conversionType) => {
  return appUtils.convertTimeToString(timestamp, conversionType);
};

export const createQueryString = (...queries) => {
  const parsedSearchQuery = queryString.parse(window.location.search);
  for (let i = 0; i < queries.length; i += 1) {
    const query = queries[i];
    parsedSearchQuery[query.key] = query.value ? query.value : undefined;
  }
  return queryString.stringify(parsedSearchQuery);
};

export const getCurrentHomePath = (...queries) => {
  const parsedSearchQuery = queryString.parse(window.location.search);
  for (let i = 0; i < queries.length; i += 1) {
    const query = queries[i];
    parsedSearchQuery[query.key] = query.value ? query.value : undefined;
  }
  const queryParam = queryString.stringify(parsedSearchQuery);
  const sub_domain = storage.getDataFromLocal(StorageKey.SUB_DOMAIN);
  return isNotEmptyString(queryParam)
    ? `/${sub_domain}/home?${queryParam}`
    : `/${sub_domain}/home`;
};

export const getAbsoluteHomePath = (...queries) => {
  const absolutePathSearchQuery = {};
  for (let i = 0; i < queries.length; i += 1) {
    const query = queries[i];
    absolutePathSearchQuery[query.key] = query.value ? query.value : undefined;
  }
  const queryParam = queryString.stringify(absolutePathSearchQuery);
  const sub_domain = storage.getDataFromLocal(StorageKey.SUB_DOMAIN);
  return isNotEmptyString(queryParam)
    ? `/${sub_domain}/home?${queryParam}`
    : `/${sub_domain}/home`;
};

export const getHomeRedirectPath = () => {
  const redirectPath = storage.getDataFromLocal(StorageKey.REDIRECT_URL);
  storage.removeDataFromLocal(StorageKey.REDIRECT_URL);
  return isNotEmptyString(redirectPath) ? redirectPath : getCurrentHomePath();
};

export const pushHomeState = (homeQueryParam, shouldReplace = false) => {
  const parsedSearchQuery = queryString.parse(window.location.search);

  if (queryString.stringify(parsedSearchQuery) === homeQueryParam) return;

  const sub_domain = storage.getDataFromLocal(StorageKey.SUB_DOMAIN);
  const homePathWithQuery = isNotEmptyString(homeQueryParam)
    ? `/${sub_domain}/home?${homeQueryParam}`
    : `/${sub_domain}/home`;

  if (shouldReplace) {
    window.location.replace(homePathWithQuery);
  } else {
    window.history.pushState('', '', homePathWithQuery);
  }
};

export const mapGoogleUserToResponse = res => {
  return appUtils.mapGoogleUserToResponse(res);
};

export const calcPercentageRange = (value, limit) => {
  return appUtils.calcPercentageRange(value, limit);
};

export const getMonthName = monthIndex => {
  return appUtils.getMonthName(monthIndex);
};

export const getDateObjectFromString = dateArray => {
  return appUtils.getDateObjectFromString(dateArray);
};

export const convertDateToString = dateObj => {
  return appUtils.convertDateToString(dateObj);
};

export const getUserIdsFromMentionString = text => {
  return appUtils.getUserIdsFromMentionString(text);
};

export const adjustInputHeight = (elementID, resetHeight, defaultHeight) => {
  return appUtils.adjustInputHeight(elementID, resetHeight, defaultHeight);
};

export const linkDecorator = (href, text, key) => {
  return appUtils.linkDecorator(href, text, key);
};

export const getMinifiedText = (text, requiredLength) => {
  return appUtils.getMinifiedText(text, requiredLength);
};

export const filterListByEitherOfTwoParams = (
  dataList,
  key1,
  key2,
  keyword = ''
) => {
  return appUtils.filterListByEitherOfTwoParams(dataList, key1, key2, keyword);
};

export const getStringFromEmphasizedString = srcString => {
  return appUtils.getStringFromEmphasizedString(srcString);
};

export const modifyDataLabelsUsingFunction = (data, customizingFunction) => {
  return appUtils.modifyDataLabelsUsingFunction(data, customizingFunction);
};

export const getCircularProgressColorMapping = (colorArray, inverse) => {
  return appUtils.getCircularProgressColorMapping(colorArray, inverse);
};

export const convertNumberStringToPercentageString = numberString => {
  return appUtils.convertNumberStringToPercentageString(numberString);
};
export const convertPercentLabelToFilterValues = value => {
  return appUtils.convertPercentLabelToFilterValues(value);
};
