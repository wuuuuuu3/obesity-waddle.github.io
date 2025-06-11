import pandas as pd
import json

# 读取Excel
file = r'C:/Users/ph/Desktop/四季食谱1.xlsx'
df = pd.read_excel(file)

# 省份、季节、食谱名、早餐、加餐1、中餐、加餐2、晚餐、油盐
province_col = '省份' if '省份' in df.columns else '地区'  # 兼容有的表格用“地区”

menu = {}
for _, row in df.iterrows():
    province = str(row[province_col]).strip()
    season = str(row['季节']).strip()
    name = str(row['食谱（总能量）']).strip() if '食谱（总能量）' in row else str(row['食谱']).strip()
    早餐 = str(row['早餐']).strip() if '早餐' in row else ''
    加餐1 = str(row['加餐']).strip() if '加餐' in row else ''
    中餐 = str(row['中餐']).strip() if '中餐' in row else ''
    加餐2 = str(row['加餐.1']).strip() if '加餐.1' in row else ''
    晚餐 = str(row['晚餐']).strip() if '晚餐' in row else ''
    油盐 = str(row['油、盐用量']).strip() if '油、盐用量' in row else ''
    item = {
        'name': name,
        '早餐': 早餐,
        '加餐1': 加餐1,
        '中餐': 中餐,
        '加餐2': 加餐2,
        '晚餐': 晚餐,
        '油盐': 油盐
    }
    if province not in menu:
        menu[province] = {}
    if season not in menu[province]:
        menu[province][season] = []
    menu[province][season].append(item)

# 输出为 JS
print('const menuData = ' + json.dumps(menu, ensure_ascii=False, indent=2) + ';')
