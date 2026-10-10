from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit,unquote
ROOT=Path(__file__).parent.parent
errors=[];count=0
class Scan(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.ids=[];self.h1=0
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='h1':self.h1+=1
  if 'id' in a:self.ids.append(a['id'])
  if tag=='img' and not a.get('alt'):errors.append('Missing image alt')
  for k in ['src','href']:
   if k in a:self.links.append(a[k])
parsed={}
for f in ROOT.rglob('*.html'):
 s=Scan();s.feed(f.read_text());parsed[f]=s
 if s.h1!=1:errors.append(f'{f}: {s.h1} h1 elements')
 if len(s.ids)!=len(set(s.ids)):errors.append(f'{f}: duplicate IDs')
for f,s in parsed.items():
 for url in s.links:
  u=urlsplit(url)
  if u.scheme or u.netloc:continue
  count+=1
  target=ROOT/unquote(u.path).lstrip('/') if u.path.startswith('/') else f.parent/unquote(u.path)
  if not u.path:target=f
  if target.is_dir():target=target/'index.html'
  if not target.exists():errors.append(f'{f.relative_to(ROOT)}: missing {url}')
  if u.fragment and target in parsed and u.fragment not in parsed[target].ids:errors.append(f'{f}: missing anchor {url}')
print(f'Checked {len(parsed)} pages and {count} local links/assets.')
if errors:raise SystemExit('\n'.join(errors))
print('PASS: local destinations, anchors, unique IDs, image alt text, and page headings.')
