# SolidWorks随笔

> [!NOTE]
>
> 2024.08 SolidWorks 2024

## 一、用户界面

### 1.1、颜色

设定系统颜色：单击 选项（“标准”工具栏）或 工具 > 选项，选择 颜色。

![image-20240824110952298](./image-20240824110952298.png)

绘图界面背景颜色可以通过视图前导进行设置。绘图界面默认背景颜色可通过在任务窗格外观布景贴图选项卡中导览到某一指定布景右键单击设置为默认布景。

![image-20240824140143448](./image-20240824140143448.png)

### 1.2、扩大图纸显示区域

全屏模式隐藏菜单、状态栏和 FeatureManager 设计树，以便显示更多的图形区域。要在全屏模式下访问菜单，请将光标悬于屏幕的顶部。
以下快捷键用于切换用户界面元素显示状态：

| FeatureManager 设计树 | 所有工具栏 | 全屏模式        |
| --------------------- | ---------- | --------------- |
| F9                    | F10        | F11 视图 > 全屏 |

绘图区正上方的视图前导可以通过工具栏 > 视图前导控制显示状态。

![image-20240824113217715](./image-20240824113217715.png)![image-20240824110952298](./image-20240824110952298.png)

### 1.3、视图方向

#### 1.3.1三重轴

三重轴出现在零件和装配体文件中以帮助在查看模型时导向。也可将之用来更改视图方向。但不能将之用为推理点。

![image-20240824134928918](C:\Users\sunia\AppData\Roaming\Typora\typora-user-images\image-20240824134928918.png)

| 选项                | 描述                                                    |
| ------------------- | ------------------------------------------------------- |
| 选择一个轴          | 查看相对于屏幕的正视图。                                |
| 选择垂直于屏幕的轴  | 将视图方向旋转 180 度。                                 |
| Shift + 选择        | 绕轴旋转 90 度。                                        |
| Ctrl + Shift + 选择 | 反方向旋转 90 度。                                      |
| Alt + 选择          | 绕轴旋转。在 选项 > 系统选项 > 视图 > 箭头键 指定增量。 |
| Ctrl + Alt + 选择   | 反向旋转。                                              |

#### 3.2视图旋转

| 选项         | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| 鼠标（左键） | 单击旋转视图 ![img](./urn1490030883534.gif)（视图工具栏），或单击视图 > 修改 > 旋转，然后拖动指针 ![img](./aqz1484076461070.gif)。 |
| 鼠标（中键） | 以鼠标中间按钮拖动。                                         |
| 键盘         | 按方向键。按住 Shift 以 90° 增量旋转。                       |
| 键盘         | 按方向键。按住 Alt 以默认增量翻滚。                          |
| 键盘         | 按方向键。按住 Ctrl 以默认增量移动。                         |

## 二、快捷的命令执行

### 2.1、重复上一个命令

 按 Enter 键。 

### 2.2、快捷键

在大多数使用场景下按下Alt即可显示各功能对应的快捷键。

### 2.3、常用快捷键

| 选项                              | 描述                                                     |
| --------------------------------- | -------------------------------------------------------- |
| ESC Ctrl + Z Ctrl + Y Alt + F + A | 退出 撤销 重做 另存为                                    |
| Ctrl + 拖动                       | 复制对象                                                 |
| Alt + 单击                        | 允许选择视图选择器立方体背面的视图。                     |
| Ctrl + 单击                       | 允许选择多个实体。                                       |
| Shift                             | 允许选择零件上的透明面。                                 |
| Shift + 单击                      | 在 FeatureManager 设计树中选择两个选定项目内的任何内容。 |
| Ctrl + B                          | 重建模型。                                               |
| Ctrl + F                          | 查找                                                     |
| Ctrl + R                          | 重绘屏幕。                                               |
| Ctrl + Tab                        | 在打开的文档之间切换。                                   |

### 2.4、鼠标笔势

通过右键拖动来触发。

### 2.5、文件模板

将文件另存为零件模板 (.prtdot) 装配体模板 (.asmdot) 工程图模板 (*.drwdot) 即可。

### 2.6、快捷键

| 选项                               | 描述           |
| ---------------------------------- | -------------- |
| 文件(F)  属性(I)..                 | Alt+A          |
| 编辑(E)  重建模型(R)..             | Ctrl+G         |
| 编辑(E)  重建所有配置..            | Ctrl+Shift+B   |
| 视图(V)  重画(R)..                 | Ctrl+R         |
| 视图(V)  隐藏线可见(B)..           | Alt+B          |
| 插入(I)  拉伸(E)..                 | Ctrl+Shift+P   |
| 插入(I)  旋转(R)..                 | Ctrl+Shift+R   |
| 插入(I)  扫描(S)..                 | Ctrl+Shift+S   |
| 插入(I)  拉伸(E)..                 | Alt+Shift+P    |
| 插入(I)  旋转(R)..                 | Alt+Shift+R    |
| 插入(I)  扫描(S)..                 | Alt+Shift+S    |
| 插入(I)  圆角(F)..                 | Alt+R          |
| 插入(I)  倒角(C)..                 | Alt+C          |
| 插入(I)  拉伸曲面(E)..             | Ctrl+Alt+P     |
| 插入(I)  旋转曲面(R)..             | Ctrl+Alt+R     |
| 插入(I)  扫描曲面(S)..             | Ctrl+Alt+S     |
| 插入(I)  注释(N)..                 | Alt+Q          |
| 插入(I)  表面粗糙度符号(F)..       | Alt+T          |
| 插入(I)  焊接符号(W)..             | Alt+H          |
| 工具(T)  镜向(M)..                 | Ctrl+Alt+M     |
| 工具(T)  线性阵列(L)..             | Ctrl+Alt+L     |
| 工具(T)  圆周阵列(C)..             | Ctrl+Alt+C     |
| 工具(T)  智能尺寸(S)..             | Alt+S          |
| 工具(T)  测量(R)..                 | Alt+W          |
| 其它  折叠所有项目。               | Shift+C        |
| 其它  强制重建                     | Ctrl+Q         |
| 其它  强制重建所有配置             | Ctrl+Shift+Q   |
| 其它  显示平坦树视图               | Ctrl+T         |
| 其它  放大                         | Shift+Z        |
| 其它  切换径向尺寸显示             | Ctrl+D         |
| 其它  投影视图                     | Alt+D          |
| 其它  中心线                       | Alt+M          |
| 其它  中心符号线                   | Alt+N          |
| 其它  配合                         | Alt+P          |
| 其它  断裂视图                     | Alt+X          |
| 其它  滚动到 FeatureManager 树顶端 | Home           |
| 其它  滚动到 FeatureManager 树底端 | End            |
| 其它  隐藏盘旋零部件/实体          | TAB            |
| 其它  显示盘旋零部件/实体          | Shift+TAB      |
| 其它  显示所有隐藏的零部件/实体    | Ctrl+Shift+TAB |
| 其它  下一个命令管理器选项卡       | Ctrl+Next      |
| 其它  选择注解视图                 | SingleQuote    |
| 其它  上一个命令管理器选项卡       | Ctrl+Prior     |
| 其它  视图选择器                   | Ctrl+SpaceBar  |
| 其它  切换注释大写字母。           | Shift+F3       |
| 其它  切换选择过滤器工具栏         | F5             |
| 其它  切换选择过滤器               | F6             |
| 其它  拼写检验程序                 | F7             |
| 其它  隐藏/显示显示窗格。          | F8             |

## 三、干涉与公差配合

### 3.1、干涉

模型中三维实体或曲面相交或重叠的部分即为干涉部分；评估中的干涉检查可创建临时实体或曲面对象，并高亮显示干涉的部分。

为避免干涉，零部件安装操作空间及运转空间也要合理布置。

未体现在模型上的零部件均存在干涉的风险。

### 3.2、公差

公差：误差的容许范围。不同的公差标准对同一标注的定义是不同的。

使用公差可以在不更改模型的前提下更改零部件间的配合关系。

### 3.3、尺寸替代

CAD、三维软件中的尺寸替代功能会使模型实际尺寸与图纸尺寸不符。

在Solidworks中，.NET 二次开发插件可检查尺寸替代。

```c#
using SolidWorks.Interop.sldworks;
using SolidWorks.Interop.swconst;

internal class Program
{
    public static void Main()
    {
    re:
        try
        {
            StartCheck();
        }
        catch (Exception ex) { Console.WriteLine(ex.Message); }
        Console.ReadKey(); Console.Clear(); goto re;
    }
    public static void StartCheck()
    {
        SldWorks swApp = new SldWorks();
        ModelDoc2 swModel = (ModelDoc2)swApp.ActiveDoc;
        DrawingDoc swDraw = (DrawingDoc)swModel;
        try
        {
            Console.WriteLine($"[文件{swModel.GetPathName()}]");
        }
        catch (Exception ex) { Console.WriteLine(ex.Message); }
        View swView = (View)swDraw.GetFirstView();
        while ((swView != null))
        {
            Console.WriteLine();
            Console.WriteLine(
                $"[视图:{swView.Name}][标注数量:{swView.GetDimensionCount()}]");
            DisplayDimension swDispDim = swView.GetFirstDisplayDimension();
            for (int i = 0; i < swView.GetDimensionCount(); i++)
            {
                try
                {
                    var dimension = (Dimension)swDispDim.GetDimension();
                    if (swDispDim.GetOverride()) 
                    { Console.ForegroundColor = ConsoleColor.Yellow; }
                    string str = swDispDim.GetText(1).Trim().ToUpper();
                    if (!string.IsNullOrEmpty(str) && 
                        !(str.StartsWith("<") && str.EndsWith(">") && 
                        (str != "R" || str != "M" || str != "C"))
                       ) { Console.ForegroundColor = ConsoleColor.Green; }
                    Console.WriteLine(
                        $"{i}[值:{dimension.Value}]"+
                        $"[覆盖:{swDispDim.GetOverrideValue()}][文本:{str}]");
                    Console.ForegroundColor = ConsoleColor.Gray;
                    swDispDim = (DisplayDimension)swDispDim.GetNext();
                }
                catch (Exception ex) { Console.WriteLine(ex.Message); }
            }
            swView = (View)swView.GetNextView();
        }
    }
}
```

### 3.4、参考

添加或更改参考能更好的保持各实例间的一致性。

#### 3.4.1、派生的草图

可以从属于同一零件的另一个草图或同一装配体中其他的草图中派生草图。

按住 Ctrl 键并单击希望放置新草图的面。单击插入 > 派生草图。

## 四、方程式

方程式：使用全局变量和数学函数定义尺寸，并生成零件和装配体中两个或更多尺寸之间的数学关系。 

### 4.1、方程式驱动的曲线

在 草图 工具栏上，单击 样条曲线 弹出菜单，然后选择 方程式驱动的曲线  或单击 工具 > 草图绘制实体 > 方程式驱动的曲线。 

#### 4.1.1、显性方程式（y是关于x的函数）

![image-20240824184533905](./image-20240824184533905.png)

#### 4.1.2、参数方程式（x,y / x,y,z是关于t的函数）

![image-20240824185613013](./image-20240824185613013.png)

对于3D草图，可生成空间曲线。

![image-20240824185857938](./image-20240824185857938.png)

### 4.2、方程式

#### 4.2.1、求解顺序

在下面的两个方程式中，Solidworks首先计算"D2@Sketch1@part_inside.Part"，从而可以安全地用作方程式"D1@Sketch1@part_outside.Part"中的变量。

“D1@Sketch1@part_outside.Part” = “D2@Sketch1@part_inside.Part” + 2
“D2@Sketch1@part_inside.Part” = “Side” - 6

可以在方程式、全局变量和尺寸 对话框的顺序视图<img src="./image-20240824190739307.png" alt="image-20240824190739307" style="zoom:50%;" />中查看求解顺序。

#### 4.2.2、特定的实例

下面的方程式引用相同的零件 BigAndSmall，实例为 <1> 和 <2>。在方程式对话中，可以选择向方程式应用的实例。这样可确保每个方程式中引用的实例没有含糊性。

"HoleWidth@Sketch1" = "Width@Sketch1@BigAndSmall<2>.Part" 
"HoleDepth@Cut-Extrude1" = "Depth@Boss-Extrude1@BigAndSmall<1>.Part" / 2.0 
"HoleWidthOffset@Sketch1" = ("Width@Sketch1@BigAndSmall<1>.Part" / 2) - ("Width@Sketch1@BigAndSmall<2>.Part" / 2)

#### 4.2.3、判断

通过使用IF函数给草图元素赋值："D1@Sketch1" = (If("D1@Sketch4">15, 20, 10)) + 8

即："D1@Sketch1" = ( "D1@Sketch4" > 15 ? 20 : 10 ) + 8

#### 4.2.4、装配体中的方程式

当装配体按下图设计时；即A1 是 A2 的子装配体，包含零件 P1 和 P2。且 GV1 和 GV2 在文档中是全局变量。 

![image-20240824191757031](./image-20240824191757031.png)

| 编辑目标 | 参考 | 方程式                                  |
| -------- | ---- | --------------------------------------- |
| A2       | A2   | “GV1” = “GV2”                           |
| A2       | A1   | “GV1” = “GV2@A1<1>.Assembly             |
| A2       | P1   | “GV1” = “GV2@P1<1>.Part@A1<1>.Assembly  |
| A1       | A2   | “GV1” = “GV2@A2.Assembly”               |
| A1       | A1   | “GV1” = “GV2”                           |
| A1       | P1   | “GV1” = “GV2@P1<1>.Part”                |
| P1       | A2   | “GV1” = “GV2@A2.Assembly”               |
| P1       | A1   | “GV1” = “GV2@A1<1>.Assembly”            |
| P1       | P1   | “GV1” = “GV2”                           |
| P1       | P2   | “GV1” = “GV2@P2<1>.Part@A1<1>.Assembly” |

#### 4.2.5、共享

可使用全局变量或尺寸数值链接到尺寸，实现尺寸的同步更新。

"base" = 20

"D1@Boss-Extrude1"="base" + 10

"D2@Sketch1" = ("base"*3) + 5

可使用从文本文件输入所有或选定方程式来实现多个零部件共享方程式；输入输出（绑定）过程可为OneTime / OneWay。
