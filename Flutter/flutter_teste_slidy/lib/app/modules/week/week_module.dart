import 'package:flutter_teste_slidy/app/modules/week/week_Page.dart';
import 'package:flutter_teste_slidy/app/modules/week/week_store.dart';
import 'package:flutter_modular/flutter_modular.dart';

class WeekModule extends Module {
  @override
  final List<Bind> binds = [
    Bind.lazySingleton((i) => WeekStore()),
  ];

  @override
  final List<ModularRoute> routes = [
    ChildRoute('/', child: (_, args) => WeekPage()),
  ];
}
