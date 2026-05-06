/*
 Filename:    formatter.js
 Student:     
 Course:      COSA 195 (Systems Project)
 Date:        2026-05-01
 Purpose:     Date and Time format utilities
              exports Canadian formats for date and currency
*/
export const formatCurrency = (new Intl.NumberFormat("en-CA",
    {style: "currency", currency: "CAD"})).format;

export const formatDate = (new Intl.DateTimeFormat("en-CA")).format;

export const formatDateTime = (new Intl.DateTimeFormat("en-CA",
    {dateStyle: "short", timeStyle: "short",})).format;

export const formatTime = (new Intl.DateTimeFormat("en-CA",
    {timeStyle: "short"})).format;