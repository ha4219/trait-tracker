from glob import glob
import os
import shutil


def main():
  a = glob("public/traits/normal/*.svg")
  b = glob("public/traits/white/*.svg")

  for l,r  in zip(a, b):
    # ext = fn.split('.')[-1]
    # file_name = fn.split('.')[0].split('\\')[-1]
    # parent = '\\'.join(fn.split('\\')[:-1])
    # name, t = file_name.split('_')
    # to = f"{parent}\\{t}\\{name}.svg"

    # shutil.move(fn, to)
    # os.rename(fn, fn.lower())
    l =l.split("\\")[-1]
    r = r.split('\\')[-1]
    if l != r:
      print(l, r)

    # to = f"{fn.split('_')[0] + '_' + fn.split('_')[1]}"
    # if fn == to:
    #   continue
    # print(fn, to)

  return


if __name__ == "__main__":
  main()