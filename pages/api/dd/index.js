import * as dateDiff from '../../../components/diff'

export default function handler({ query: { d1, d2 } }, res) {
  var date1 = new Date(d1);
  var date2 = new Date(d2);

  var diffYears = dateDiff.inYears(date1, date2);
  var diffMonths = dateDiff.inMonths(date1, date2);
  var diffWeeks = dateDiff.inWeeks(date1, date2);
  var diffDays = dateDiff.inDays(date1, date2);
  var diffHours = dateDiff.inHours(date1, date2);
  var diffMinutes = dateDiff.inMinutes(date1, date2);
  var diffSeconds = dateDiff.inSeconds(date1, date2);

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(
    {
      inYears: diffYears,
      inMonths: diffMonths,
      inWeeks: diffWeeks,
      inDays: diffDays,
      inHours: diffHours,
      inMinutes: diffMinutes,
      inSeconds: diffSeconds
    }))
}