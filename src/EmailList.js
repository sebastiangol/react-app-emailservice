import React, { useEffect, useState } from 'react';
import './EmailList.css';
import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RedoIcon from '@material-ui/icons/Redo';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import Section from './Section';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';
import { db } from './firebase';

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection('emails')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot =>
        setEmails(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="purple" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title="Sebbergramchatbook"
          subject="Please come back"
          description="We made a mistake. We need you. Please come back."
          time="Sat, 26 Jun 2021 14:44:44 GMT"
        />
        <EmailRow
          title="Dave"
          subject="READ URGENTLY"
          description="I have to let you know. I'm so sorry about this, but this is a prank"
          time="Fri, 25 Jun 2021 10:00:03 GMT"
        />
        <EmailRow
          title="gmail-team@gmail.com"
          subject="Copyright Lawsuit"
          description="Hello. We (Google) are filing a lawsuit against your Seb-Mail application, which is a blatant rip-off of our own email service. You will hear from our lawyers shortly. Thank you."
          time="Thu, 24 Jun 2021 15:31:11 GMT"
        />
        <EmailRow
          title="Dave"
          subject="Transaction"
          description="how would you like to perform the transaction?"
          time="Wed, 23 Jun 2021 00:00:07 GMT"
        />
        <EmailRow
          title="Dave"
          subject="hey"
          description="hey man. are you alright?"
          time="Tue, 22 Jun 2021 23:54:55 GMT"
        />
        <EmailRow
          title="Sebbergramchatbook"
          subject="Restraining Order Notice"
          description="Hello. We have had a restraining order issued against you. Please stay at least 45km away from our headquarters. Thank you."
          time="Tue, 22 Jun 2021 20:14:45 GMT"
        />
        <EmailRow
          title="Sebbergramchatbook"
          subject="RE: Termination"
          description="Hello. We cannot reverse this decision. Please leave us alone."
          time="Mon, 21 Jun 2021 11:14:00 GMT"
        />
        <EmailRow
          title="Sebbergramchatbook"
          subject="Termination"
          description="Hello. We are sorry to break this to you, but you're fired. Goodbye"
          time="Sun, 20 Jun 2021 12:11:11 GMT"
        />
        <EmailRow
          title="Orange company"
          subject="Follow-up"
          description="Hello. Do you want this job or what? Hurry up"
          time="Sun, 20 Jun 2021 08:14:13 GMT"
        />
        <EmailRow
          title="Bob"
          subject="hello?"
          description="why arent you responding"
          time="Sat, 19 Jun 2021 12:35:17 GMT"
        />
        <EmailRow
          title="Bob"
          subject="respond"
          description="please respond"
          time="Fri, 18 Jun 2021 06:50:51 GMT"
        />
        <EmailRow
          title="Bob"
          subject="URGENT"
          description="I'm here to tell you right now, this is a prank."
          time="Fri, 18 Jun 2021 02:11:11 GMT"
        />
        <EmailRow
          title="Sebbergramchatbook"
          subject="Checkup"
          description="Are you doing alright? I hope so"
          time="Thu, 17 Jun 2021 17:10:59 GMT"
        />
        <EmailRow
          title="Bob"
          subject="hi"
          description="hello man"
          time="Thu, 17 Jun 2021 14:30:40 GMT"
        />
        <EmailRow
          title="Orange Company"
          subject="Job opportunity"
          description="Good evening sir/madam, we have a job for you. Please take it."
          time="Wed, 16 Jun 2021 15:22:20 GMT"
        />
        <EmailRow
          title="Sebbergramchatbook"
          subject="Welcome"
          description="Welcome to the company buddy! Hope you're ready!"
          time="Tue, 15 Jun 2021 11:34:44 GMT"
        />
      </div>
    </div>
  );
}

export default EmailList;
