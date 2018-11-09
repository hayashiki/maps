# Define custom units for farming
# @see https://github.com/olbrich/ruby-units

Unit.define('seed') do |seed|
  seed.definition = Unit.new('1')
  seed.aliases = ['seeds', 'per seed']
  seed.display_name = 'seeds'
end

Unit.define('bushel') do |bushel|
  bushel.definition = Unit.new('1')
  bushel.aliases = ['bushels', 'per bushel']
end

Unit.define('per gallon') do |gal|
  gal.definition = Unit.new('1 gallon')
  gal.display_name = 'gal'
end

Unit.define('per fl oz') do |oz|
  oz.definition = Unit.new('1 floz')
  oz.display_name = 'fl oz'
end

Unit.define('per pint') do |gal|
  gal.definition = Unit.new('1 pint')
  gal.display_name = 'pint'
end

Unit.define('per quart') do |oz|
  oz.definition = Unit.new('1 quart')
  oz.display_name = 'quart'
end

# Resolves issue where sometimes fl oz resolves to fl*oz.
Unit.define('fl oz') do |oz|
  oz.definition = Unit.new('1 floz')
  oz.display_name = 'fl oz'
end

Unit.define('per lb') do |lb|
  lb.definition = Unit.new('1 lb')
  lb.display_name = 'lb'
end

Unit.define('per litre') do |lb|
  lb.definition = Unit.new('1 litre')
  lb.display_name = 'litre'
end

Unit.define('per gram') do |lb|
  lb.definition = Unit.new('1 gram')
  lb.display_name = 'gram'
end

Unit.define('per oz') do |lb|
  lb.definition = Unit.new('1 oz')
  lb.display_name = 'oz'
end

Unit.define('per metric ton') do |metric_ton|
  metric_ton.definition = Unit.new('1 tonne')
  metric_ton.aliases = ['metric ton', 'metric tons']
  metric_ton.display_name = 'tonne'
end

Unit.define('per ton') do |ton|
  ton.definition = Unit.new('1 ton')
  ton.display_name = 'tn'
end

Unit.define('bag') do |bag|
  bag.definition = Unit.new('80000 seeds')
  bag.aliases = ['bags', 'per bag']
  bag.display_name = 'bags'
end

Unit.redefine!('unit') do |unit|
  unit.definition = Unit.new('140000 seeds')
  unit.aliases = ['units', 'units - 140k', 'per unit', 'per unit - 140k', 'unit-140k', 'per unit-140k']
  unit.display_name = 'units - 140k'
end

Unit.define('unit - 130k') do |unit|
  unit.definition = Unit.new('130000 seeds')
  unit.aliases = ['units - 130k', 'per unit - 130k', 'units-130k', 'per unit-130k']
  unit.display_name = 'units - 130k'
end

Unit.define('custom') do |unit|
  unit.definition = Unit.new('1')
end
